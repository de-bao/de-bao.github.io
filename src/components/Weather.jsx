import { useState, useEffect } from 'react'
import './Weather.css'

function Weather() {
  const [cityDesc, setCityDesc] = useState('南京 --')
  const [temp, setTemp] = useState('--°C~--°C')

  useEffect(() => {
    const cityName = '南京'
    
    const getWeather = () => {
      // 使用Open-Meteo免费API
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=32.0603&longitude=118.7969&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Asia/Shanghai`)
        .then(response => response.json())
        .then(data => {
          if (data && data.current && data.daily) {
            const current = data.current
            const daily = data.daily
            const tempMax = Math.round(daily.temperature_2m_max[0])
            const tempMin = Math.round(daily.temperature_2m_min[0])
            
            // 天气代码转中文描述
            const weatherCodes = {
              0: '晴朗', 1: '大部分晴朗', 2: '部分多云', 3: '阴天',
              45: '雾', 48: '霜雾', 51: '小雨', 53: '中雨', 55: '大雨',
              61: '小雨', 63: '中雨', 65: '大雨', 71: '小雪', 73: '中雪', 75: '大雪',
              80: '小雨', 81: '中雨', 82: '大雨', 85: '小雪', 86: '大雪',
              95: '雷暴', 96: '雷暴冰雹', 99: '强雷暴冰雹'
            }
            const weatherDesc = weatherCodes[current.weather_code] || '未知'
            
            setCityDesc(`${cityName} ${weatherDesc}`)
            setTemp(`${tempMin}°C~${tempMax}°C`)
          } else {
            throw new Error('天气数据格式错误')
          }
        })
        .catch(error => {
          console.error('获取天气失败:', error)
          // 备用方案：使用wttr.in
          fetch(`https://wttr.in/Nanjing?format=j1&lang=zh`)
            .then(response => response.json())
            .then(data => {
              if (data && data.current_condition && data.current_condition[0]) {
                const current = data.current_condition[0]
                const temp = current.temp_C
                const tempMax = current.temp_C || temp
                const tempMin = current.temp_C || temp
                const desc = current.lang_zh ? current.lang_zh[0].value : (current.weatherDesc ? current.weatherDesc[0].value : '未知')
                
                setCityDesc(`${cityName} ${desc}`)
                setTemp(`${tempMin}°C~${tempMax}°C`)
              } else {
                setCityDesc(`${cityName} --`)
                setTemp('--°C~--°C')
              }
            })
            .catch(() => {
              setCityDesc(`${cityName} --`)
              setTemp('--°C~--°C')
            })
        })
    }
    
    // 立即获取天气
    getWeather()
    // 每10分钟更新一次
    const interval = setInterval(getWeather, 10 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="nav-weather-item" id="nav-weather-item">
      <span className="nav-weather-city-desc" id="nav-weather-city-desc">{cityDesc}</span>
      <span className="nav-weather-temp" id="nav-weather-temp">{temp}</span>
    </div>
  )
}

export default Weather
