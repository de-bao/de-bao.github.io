import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <>
      <Link to="/" className="nav-btn nav-btn-home" title="个人空间" aria-label="个人空间">🏠</Link>
      <Link to="/blog" className="nav-btn nav-btn-blog" title="博客文章" aria-label="博客文章">📚</Link>
      <Link to="/future" className="nav-btn nav-btn-future" title="未来规划" aria-label="未来规划">🌟</Link>
      <Link to="/life" className="nav-btn nav-btn-life" title="生活点滴" aria-label="生活点滴">💫</Link>
    </>
  )
}

export default Navigation
