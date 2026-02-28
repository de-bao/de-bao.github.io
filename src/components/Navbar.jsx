import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Clock from './Clock'
import Weather from './Weather'
import NavLanguageToggle from './NavLanguageToggle'
import './Navbar.css'

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { title: '首页', url: '/' },
    { title: '未来', url: '/future' },
    { title: '生活', url: '/life' },
    { title: '博客', url: '/blog' },
    { title: '简历', url: '/resume' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.classList.add('menu-open')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('menu-open')
      document.body.style.overflow = ''
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.classList.remove('menu-open')
    document.body.style.overflow = ''
  }

  useEffect(() => {
    // ESC键关闭菜单
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* 时钟和天气 */}
        <div className="nav-weather-clock">
          <Clock />
          <Weather />
          <NavLanguageToggle />
          <button 
            className="nav-toggle" 
            aria-label="切换菜单" 
            id="nav-toggle"
            onClick={toggleMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navigation.map((item) => (
            <li key={item.url}>
              <Link 
                to={item.url} 
                className={location.pathname === item.url ? 'active' : ''}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div 
          className={`nav-menu-overlay ${isMenuOpen ? 'active' : ''}`}
          id="nav-menu-overlay"
          onClick={closeMenu}
        ></div>
      </div>
    </nav>
  )
}

export default Navbar
