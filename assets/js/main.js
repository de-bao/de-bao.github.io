// 现代化交互效果和动画
document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单切换
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // 点击菜单项后关闭移动端菜单
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer - 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 数字动画 - 统计数字
    function animateNumber(element, target) {
        let current = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (target >= 1000 ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (target >= 1000 ? '+' : '');
            }
        }, 16);
    }

    // 观察统计数字
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                if (target && !isNaN(target)) {
                    entry.target.dataset.animated = 'true';
                    animateNumber(entry.target, target);
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.card, .post-card, .project-card, .skill-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // 页面加载淡入效果
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // 实时时钟
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const clockTimeEl = document.getElementById('clock-time');
        if (clockTimeEl) {
            clockTimeEl.textContent = `${hours}:${minutes}:${seconds}`;
        }

        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const weekday = weekdays[now.getDay()];
        
        const clockDateEl = document.getElementById('clock-date');
        if (clockDateEl) {
            clockDateEl.textContent = `${year}年${month}月${day}日 ${weekday}`;
        }
    }

    // 立即更新一次时钟
    updateClock();
    // 每秒更新时钟
    setInterval(updateClock, 1000);

    // 获取天气信息
    function getWeather() {
        const weatherDisplay = document.getElementById('weather-display');
        if (!weatherDisplay) return;

        // 使用wttr.in免费天气API（不需要API key）
        // 默认获取北京天气，可以根据需要修改城市
        const city = 'Beijing'; // 可以改为其他城市，如 'Shanghai', 'Guangzhou' 等
        
        // 方法1：使用wttr.in（简单但可能不稳定）
        fetch(`https://wttr.in/${city}?format=j1&lang=zh`)
            .then(response => response.json())
            .then(data => {
                if (data && data.current_condition && data.current_condition[0]) {
                    const current = data.current_condition[0];
                    const temp = current.temp_C;
                    const desc = current.lang_zh ? current.lang_zh[0].value : current.weatherDesc[0].value;
                    const humidity = current.humidity;
                    const windSpeed = current.windspeedKmph;
                    
                    weatherDisplay.innerHTML = `
                        <div class="weather-info">
                            <div class="weather-temp">
                                <i class="fas fa-thermometer-half"></i>
                                <span>${temp}°C</span>
                            </div>
                            <div class="weather-desc">${desc}</div>
                            <div class="weather-details">
                                <div class="weather-detail-item">
                                    <i class="fas fa-tint"></i>
                                    <span>${humidity}%</span>
                                </div>
                                <div class="weather-detail-item">
                                    <i class="fas fa-wind"></i>
                                    <span>${windSpeed}km/h</span>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    throw new Error('天气数据格式错误');
                }
            })
            .catch(error => {
                console.error('获取天气失败:', error);
                // 如果wttr.in失败，尝试使用Open-Meteo免费API（不需要key）
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=39.9042&longitude=116.4074&current=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia/Shanghai`)
                    .then(response => response.json())
                    .then(data => {
                        if (data && data.current) {
                            const current = data.current;
                            const temp = Math.round(current.temperature_2m);
                            const humidity = current.relative_humidity_2m;
                            
                            // 天气代码转中文描述
                            const weatherCodes = {
                                0: '晴朗', 1: '大部分晴朗', 2: '部分多云', 3: '阴天',
                                45: '雾', 48: '霜雾', 51: '小雨', 53: '中雨', 55: '大雨',
                                61: '小雨', 63: '中雨', 65: '大雨', 71: '小雪', 73: '中雪', 75: '大雪',
                                80: '小雨', 81: '中雨', 82: '大雨', 85: '小雪', 86: '大雪',
                                95: '雷暴', 96: '雷暴冰雹', 99: '强雷暴冰雹'
                            };
                            const desc = weatherCodes[current.weather_code] || '未知';
                            
                            weatherDisplay.innerHTML = `
                                <div class="weather-info">
                                    <div class="weather-temp">
                                        <i class="fas fa-thermometer-half"></i>
                                        <span>${temp}°C</span>
                                    </div>
                                    <div class="weather-desc">${desc}</div>
                                    <div class="weather-details">
                                        <div class="weather-detail-item">
                                            <i class="fas fa-tint"></i>
                                            <span>${humidity}%</span>
                                        </div>
                                    </div>
                                </div>
                            `;
                        } else {
                            throw new Error('天气数据格式错误');
                        }
                    })
                    .catch(error => {
                        console.error('获取天气失败:', error);
                        weatherDisplay.innerHTML = `
                            <div class="weather-error">
                                <i class="fas fa-exclamation-triangle"></i>
                                <p>无法获取天气信息</p>
                                <p style="font-size: 0.8rem; margin-top: 0.5rem;">请检查网络连接</p>
                            </div>
                        `;
                    });
            });
    }

    // 获取天气信息
    getWeather();
    // 每30分钟更新一次天气
    setInterval(getWeather, 30 * 60 * 1000);
});
