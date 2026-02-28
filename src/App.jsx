import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import Life from './pages/Life'
import Future from './pages/Future'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Resume页面不使用Layout，保持独立 */}
        <Route path="/resume" element={<Resume />} />
        {/* 其他页面使用Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/life" element={<Layout><Life /></Layout>} />
        <Route path="/future" element={<Layout><Future /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
