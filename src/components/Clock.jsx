import { useState, useEffect } from 'react'
import './Clock.css'

function Clock() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      
      setDate(`${year}年${month}月${day}日`)
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    // 立即更新一次
    updateClock()
    // 每秒更新
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="nav-clock-item">
      <span className="nav-clock-date" id="nav-clock-date">{date}</span>
      <span className="nav-clock-time" id="nav-clock-time">{time}</span>
    </div>
  )
}

export default Clock
