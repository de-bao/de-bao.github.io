import { useState, useEffect, useRef } from 'react'
import './NavLanguageToggle.css'

function NavLanguageToggle() {
  const [currentLang, setCurrentLang] = useState('zh')
  const [isOpen, setIsOpen] = useState(false)
  const originalTextsRef = useRef(new Map())
  const langItemRef = useRef(null)

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

  // 翻译文本函数（与LanguageToggle相同）
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

  async function translateText(text, fromLang = 'zh', toLang = 'en') {
    let result = await translateTextMyMemory(text, fromLang, toLang)
    if (result) return result
    result = await translateTextLibreTranslate(text, fromLang, toLang)
    if (result) return result
    return null
  }

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
          if (parent.closest('[data-translate="no"]') || parent.hasAttribute('data-translate') && parent.getAttribute('data-translate') === 'no') {
            return NodeFilter.FILTER_REJECT
          }
          if (parent.closest('.nav-lang-item') || parent.closest('.resume-lang-item')) {
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

  async function translatePage() {
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
          
          if (/^[a-zA-Z0-9\s\.,!?;:'"()\[\]{}\-]+$/.test(text) && text.length > 3) {
            return
          }
          
          if (!originalTextsRef.current.has(node)) {
            originalTextsRef.current.set(node, text)
          }
          
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
    }
  }

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && langItemRef.current && !langItemRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <div className="nav-lang-item" id="nav-lang-item" ref={langItemRef} data-translate="no">
      <button 
        className="lang-dropdown-btn" 
        id="lang-dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
        data-translate="no"
      >
        <span id="lang-current" data-translate="no">{currentLang === 'en' ? 'English' : '中文'}</span>
        <i className="fas fa-chevron-down"></i>
      </button>
      {isOpen && (
        <div className="lang-dropdown-menu" id="lang-dropdown-menu">
          <button 
            className={`lang-option ${currentLang === 'zh' ? 'active' : ''}`}
            data-lang="zh" 
            data-translate="no"
            onClick={() => switchLanguage('zh')}
          >
            中文
          </button>
          <button 
            className={`lang-option ${currentLang === 'en' ? 'active' : ''}`}
            data-lang="en" 
            data-translate="no"
            onClick={() => switchLanguage('en')}
          >
            English
          </button>
        </div>
      )}
    </div>
  )
}

export default NavLanguageToggle
