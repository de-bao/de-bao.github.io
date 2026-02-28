import { useState, useEffect, useRef } from 'react'
import './LanguageToggle.css'

function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState('zh')
  const [isOpen, setIsOpen] = useState(false)
  const originalTextsRef = useRef(new Map())

  useEffect(() => {
    // 从localStorage读取保存的语言
    const savedLang = localStorage.getItem('lang') || 'zh'
    setCurrentLang(savedLang)
    document.documentElement.lang = savedLang

    // 如果页面加载时已经是英文状态，自动翻译
    if (savedLang === 'en') {
      setTimeout(() => translatePage(), 500)
    }
  }, [])

  // 使用MyMemory Translation API翻译文本
  async function translateTextMyMemory(text, fromLang = 'zh', toLang = 'en') {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}&de=debao.cpc@gmail.com`
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Accept': 'application/json' }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      if (data.responseStatus === 200 && data.responseData) {
        return data.responseData.translatedText
      }
      throw new Error('Translation failed')
    } catch (error) {
      console.error('[翻译] MyMemory错误:', error)
      return null
    }
  }

  // 使用LibreTranslate API翻译文本（备用）
  async function translateTextLibreTranslate(text, fromLang = 'zh', toLang = 'en') {
    try {
      const response = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          q: text,
          source: fromLang,
          target: toLang,
          format: 'text'
        })
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      if (data.translatedText) {
        return data.translatedText
      }
      throw new Error('Translation failed')
    } catch (error) {
      console.error('[翻译] LibreTranslate错误:', error)
      return null
    }
  }

  // 统一的翻译函数
  async function translateText(text, fromLang = 'zh', toLang = 'en') {
    // 先尝试MyMemory
    let result = await translateTextMyMemory(text, fromLang, toLang)
    if (result) return result
    
    // 如果MyMemory失败，尝试LibreTranslate
    result = await translateTextLibreTranslate(text, fromLang, toLang)
    if (result) return result
    
    return null
  }

  // 提取需要翻译的文本节点
  function getTextNodes(element) {
    const textNodes = []
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          const parent = node.parentElement
          if (!parent) return NodeFilter.FILTER_REJECT
          const tagName = parent.tagName.toLowerCase()
          if (['script', 'style', 'noscript', 'code', 'pre'].includes(tagName)) {
            return NodeFilter.FILTER_REJECT
          }
          // 跳过标记为不翻译的元素
          if (parent.closest('[data-translate="no"]') || parent.hasAttribute('data-translate') && parent.getAttribute('data-translate') === 'no') {
            return NodeFilter.FILTER_REJECT
          }
          // 跳过语言切换相关的元素
          if (parent.closest('.resume-lang-item')) {
            return NodeFilter.FILTER_REJECT
          }
          if (node.textContent.trim().length > 0) {
            return NodeFilter.FILTER_ACCEPT
          }
          return NodeFilter.FILTER_REJECT
        }
      }
    )
    
    let node
    while (node = walker.nextNode()) {
      textNodes.push(node)
    }
    return textNodes
  }

  // 翻译页面内容
  async function translatePage() {
    // 如果已经翻译过，先恢复中文
    if (originalTextsRef.current.size > 0) {
      restoreChinese()
    }
    
    const textNodes = getTextNodes(document.body)
    
    const loadingMsg = document.createElement('div')
    loadingMsg.id = 'translate-loading'
    loadingMsg.style.cssText = 'position:fixed;top:20px;right:20px;background:#6366f1;color:white;padding:12px 20px;border-radius:8px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.3);'
    loadingMsg.textContent = '正在翻译页面...'
    document.body.appendChild(loadingMsg)
    
    try {
      const batchSize = 10
      let translatedCount = 0
      
      for (let i = 0; i < textNodes.length; i += batchSize) {
        const batch = textNodes.slice(i, i + batchSize)
        const promises = batch.map(async (node) => {
          const text = node.textContent.trim()
          if (!text || text.length === 0) return
          
          // 跳过已经是英文的文本（简单判断）
          if (/^[a-zA-Z0-9\s\.,!?;:'"()\[\]{}\-]+$/.test(text) && text.length > 3) {
            return
          }
          
          // 保存原始文本（只保存一次）
          if (!originalTextsRef.current.has(node)) {
            originalTextsRef.current.set(node, text)
          }
          
          // 翻译文本
          const translated = await translateText(text)
          if (translated && translated !== text) {
            node.textContent = translated
            translatedCount++
          }
        })
        
        await Promise.all(promises)
        await new Promise(resolve => setTimeout(resolve, 300))
      }
      
      loadingMsg.remove()
      
      const successMsg = document.createElement('div')
      successMsg.style.cssText = 'position:fixed;top:20px;right:20px;background:#10b981;color:white;padding:12px 20px;border-radius:8px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.3);'
      successMsg.textContent = `翻译完成！已翻译 ${translatedCount} 处文本`
      document.body.appendChild(successMsg)
      setTimeout(() => successMsg.remove(), 2000)
      
    } catch (error) {
      console.error('翻译错误:', error)
      loadingMsg.remove()
      tryBrowserTranslation()
    }
  }

  // 尝试使用浏览器翻译功能
  function tryBrowserTranslation() {
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    const isEdge = /Edg/.test(navigator.userAgent)
    
    const errorMsg = document.createElement('div')
    errorMsg.style.cssText = 'position:fixed;top:20px;right:20px;background:#ef4444;color:white;padding:16px 24px;border-radius:8px;z-index:10000;box-shadow:0 4px 12px rgba(0,0,0,0.3);max-width:450px;line-height:1.6;'
    errorMsg.innerHTML = `
      <strong>自动翻译API暂时不可用</strong><br>
      <small style="opacity:0.9;">
      ${isChrome || isEdge ? 
        '请使用浏览器内置翻译：<br>1. 点击地址栏右侧的翻译图标<br>2. 或右键页面选择"翻译为英语"' : 
        '正在为您打开Google Translate...'
      }
      </small>
    `
    document.body.appendChild(errorMsg)
    
    if (isChrome || isEdge) {
      setTimeout(() => {
        errorMsg.remove()
        const useBrowser = confirm(
          '自动翻译API暂时不可用。\n\n' +
          '是否使用浏览器内置翻译功能？\n\n' +
          '点击"确定"后，请在浏览器地址栏右侧点击翻译图标，或右键页面选择"翻译为英语"。\n\n' +
          '点击"取消"将自动在新标签页打开Google Translate。'
        )
        
        if (!useBrowser) {
          const translateUrl = `https://translate.google.com/translate?sl=zh&tl=en&u=${encodeURIComponent(window.location.href)}`
          window.open(translateUrl, '_blank')
        }
      }, 3000)
    } else {
      setTimeout(() => {
        errorMsg.remove()
        const translateUrl = `https://translate.google.com/translate?sl=zh&tl=en&u=${encodeURIComponent(window.location.href)}`
        window.open(translateUrl, '_blank')
      }, 2000)
    }
  }

  // 恢复中文
  function restoreChinese() {
    originalTextsRef.current.forEach((originalText, node) => {
      node.textContent = originalText
    })
    originalTextsRef.current.clear()
  }

  async function switchLanguage(lang) {
    if (lang === currentLang) return
    
    setCurrentLang(lang)
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    setIsOpen(false)
    
    if (lang === 'en') {
      await translatePage()
    } else {
      restoreChinese()
    }
  }

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.resume-lang-item')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <div className="resume-lang-item" id="resume-lang-item">
      <button 
        className="resume-lang-btn" 
        id="resume-lang-btn" 
        onClick={() => setIsOpen(!isOpen)}
        title="语言切换" 
        aria-label="语言切换"
      >
        <span id="resume-lang-current" style={{ fontSize: '8px', display: 'inline-block' }}>🌐</span>
        <i className="fas fa-chevron-down" style={{ fontSize: '4px', marginLeft: '1px', transition: 'transform 0.3s ease', verticalAlign: 'middle', transform: isOpen ? 'rotate(180deg)' : 'none' }}></i>
      </button>
      {isOpen && (
        <div className="resume-lang-menu" id="resume-lang-menu">
          <button 
            className={`resume-lang-option ${currentLang === 'zh' ? 'active' : ''}`}
            data-lang="zh" 
            onClick={() => switchLanguage('zh')}
          >
            中文
          </button>
          <button 
            className={`resume-lang-option ${currentLang === 'en' ? 'active' : ''}`}
            data-lang="en" 
            onClick={() => switchLanguage('en')}
          >
            English
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageToggle
