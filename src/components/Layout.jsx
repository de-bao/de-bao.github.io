import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 动态更新页面标题和meta标签
  useEffect(() => {
    const titles = {
      '/': 'Baud的个人空间',
      '/blog': '博客 - Baud的个人空间',
      '/life': '生活 - Baud的个人空间',
      '/future': '未来 - Baud的个人空间',
      '/resume': '简历 - Baud的个人空间'
    }
    
    const descriptions = {
      '/': 'Baud的个人空间 - 技术博客与个人作品集',
      '/blog': '技术博客 - 分享技术见解和学习笔记',
      '/life': '生活点滴 - 记录生活中的美好时光',
      '/future': '未来规划 - 规划未来，成就更好的自己',
      '/resume': '个人简历 - 大模型应用工程师、AI算法工程师'
    }

    const title = titles[location.pathname] || 'Baud的个人空间'
    const description = descriptions[location.pathname] || 'Baud的个人空间 - 技术博客与个人作品集'

    document.title = title
    
    // 更新或创建meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description)
  }, [location])

  useEffect(() => {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar')
    if (navbar) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled')
        } else {
          navbar.classList.remove('scrolled')
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // 页面加载淡入效果
    document.body.style.opacity = '0'
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease'
      document.body.style.opacity = '1'
    }, 100)

    // Intersection Observer - 滚动动画
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [location])

  return (
    <div className="wrapper">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
