import { useEffect } from 'react'
import './Footer.css'

function Footer() {
  useEffect(() => {
    // 添加ClustrMaps样式，确保地图可见（仅在Footer中）
    const style = document.createElement('style')
    style.textContent = `
      .footer .clustrmaps-wrapper #clustrmaps-widget-v2,
      .footer .clustrmaps-wrapper .clustrmaps-map-control {
        display: block !important;
        visibility: visible !important;
        position: relative !important;
      }
    `
    document.head.appendChild(style)

    // 加载ClustrMaps统计脚本
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'clustrmaps'
    script.src = '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=I_kcB5dWikqitdTbwCNpq76yRHZY-el4GrjzEGxRpFI&co=010c14&cmo=897474&cmn=11ef11'
    const footer = document.querySelector('.footer')
    if (footer) {
      const wrapper = footer.querySelector('.clustrmaps-wrapper')
      if (wrapper) {
        wrapper.appendChild(script)
      }
    }

    return () => {
      const existingScript = document.getElementById('clustrmaps')
      if (existingScript) {
        existingScript.remove()
      }
      style.remove()
    }
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>关于</h3>
            <p>技术博客与个人作品集</p>
          </div>
          <div className="footer-section">
            <h3>社交链接</h3>
            <div className="social-links">
              <a href="https://github.com/de-bao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.zhihu.com/people/baud-17" target="_blank" rel="noopener noreferrer" aria-label="知乎">
                <i className="fab fa-zhihu"></i>
              </a>
              <a href="https://blog.csdn.net/qq_54707385" target="_blank" rel="noopener noreferrer" aria-label="CSDN">
                <i className="fas fa-blog"></i>
              </a>
              <a href="/resume?print=true" aria-label="简历下载">
                <i className="fas fa-file-pdf"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>订阅</h3>
            <p>
              <a href="/feed.xml">RSS Feed</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Baud. 保留所有权利.</p>
          <p>由 <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">CloudFlare</a> 托管</p>
        </div>
        {/* ClustrMaps Map Widget */}
        <div className="clustrmaps-wrapper" style={{ textAlign: 'center', marginTop: '20px' }}>
          {/* 脚本通过useEffect动态加载 */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
