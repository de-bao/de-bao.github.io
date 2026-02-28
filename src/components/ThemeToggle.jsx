import './ThemeToggle.css'

function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button 
      className="theme-toggle" 
      id="themeToggle" 
      onClick={onToggle}
      title="切换明暗模式" 
      aria-label="切换明暗模式"
    >
      {darkMode ? '☀️' : '🌓'}
    </button>
  )
}

export default ThemeToggle
