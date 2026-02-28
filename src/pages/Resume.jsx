import { useState, useEffect } from 'react'
import ResumeHeader from '../components/Resume/ResumeHeader'
import WorkExperience from '../components/Resume/WorkExperience'
import Internship from '../components/Resume/Internship'
import Education from '../components/Resume/Education'
import Publications from '../components/Resume/Publications'
import Awards from '../components/Resume/Awards'
import ThemeToggle from '../components/ThemeToggle'
import Navigation from '../components/Navigation'
import LanguageToggle from '../components/LanguageToggle'
import './Resume.css'

function Resume() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // 设置页面meta标签
    document.title = 'Baud - Resume'
    
    // 更新或创建meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', '鲍德的个人简历 - 大模型应用工程师、AI算法工程师、AI Infra工程师')
    
    // 更新或创建meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', '简历,AI,大模型,算法工程师,机器学习,深度学习')
  }, [])

  useEffect(() => {
    // 从localStorage读取保存的主题
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.body.classList.add('dark-mode')
    } else {
      setDarkMode(false)
      document.body.classList.remove('dark-mode')
      if (!savedTheme) {
        localStorage.setItem('theme', 'light')
      }
    }

    // 检测URL参数，如果包含 print=true 则自动触发打印
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('print') === 'true') {
      // 延迟一点时间，确保页面完全加载
      setTimeout(() => {
        window.print()
      }, 500)
    }

    // 加载ClustrMaps统计脚本
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'clustrmaps'
    script.src = '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=I_kcB5dWikqitdTbwCNpq76yRHZY-el4GrjzEGxRpFI&co=010c14&cmo=897474&cmn=11ef11'
    document.body.appendChild(script)

    return () => {
      // 清理脚本
      const existingScript = document.getElementById('clustrmaps')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (newDarkMode) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />
      <div className="resume-container">
        <ResumeHeader />
        <WorkExperience />
        <Internship />
        <Education />
        <Publications />
        <Awards />
        <div className="footnote">
          <p><sup>*</sup> 2021.06-2022.09期间备考清华大学电子信息硕士</p>
        </div>
      </div>
      <Navigation />
      <LanguageToggle />
      <button onClick={handlePrint} className="download-btn" title="打印简历" aria-label="打印简历">🖨️</button>
    </>
  )
}

export default Resume
