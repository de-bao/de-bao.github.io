import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import './Home.css'

function Home() {
  const [stats, setStats] = useState({ projects: 0, articles: 0, experience: 0, stars: 0 })
  
  // 获取最新3篇文章
  const latestPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
  
  // 格式化日期
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月${String(date.getDate()).padStart(2, '0')}日`
  }

  useEffect(() => {
    // 统计数据动画
    const animateValue = (start, end, duration, callback) => {
      const startTime = performance.now()
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const value = start + (end - start) * progress
        callback(Math.floor(value * 10) / 10) // 保留一位小数
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }

    const targets = { projects: 6, articles: 23, experience: 0.6, stars: 2 }
    animateValue(0, targets.projects, 2000, (val) => setStats(prev => ({ ...prev, projects: val })))
    animateValue(0, targets.articles, 2000, (val) => setStats(prev => ({ ...prev, articles: val })))
    animateValue(0, targets.experience, 2000, (val) => setStats(prev => ({ ...prev, experience: val })))
    animateValue(0, targets.stars, 2000, (val) => setStats(prev => ({ ...prev, stars: val })))
  }, [])

  return (
    <div className="home-container">
      {/* 英雄区域 */}
      <div className="home-hero">
        <div className="container">
          <h1>Hello，大家好！</h1>
          <p>我是Baud，欢迎来到我的个人空间</p>
          <div className="hero-actions">
            <Link to="/future" className="btn-hero">
              探索未来 <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        {/* 统计数据 */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{stats.projects}</div>
            <div className="stat-label">项目经验</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.articles}</div>
            <div className="stat-label">技术文章</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.experience}</div>
            <div className="stat-label">年开发经验</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{stats.stars}</div>
            <div className="stat-label">GitHub Stars</div>
          </div>
        </div>

        {/* 赛博生活 */}
        <section className="home-section fade-in">
          <h2>
            <Link to="/life" style={{ textDecoration: 'none', color: 'inherit' }}>💫 赛博生活</Link>
          </h2>
          
          <h3>个人简介</h3>
          <p>
            计算机专业硕士研究生，拥有扎实的计算机理论基础和丰富的项目实践经验。擅长全栈开发、算法设计与优化、系统架构设计。
            在Web开发、AI应用、分布式系统等领域有深入研究。具备良好的团队协作能力和问题解决能力，致力于将理论知识转化为实际应用。
            目前正在寻找软件工程师、全栈开发工程师等相关职位机会。
          </p>
          
          <h3>自我评价</h3>
          <p>
            具备扎实的计算机理论基础和丰富的项目实践经验，熟悉全栈开发技术栈。在学习和工作中注重理论与实践相结合，
            能够快速学习新技术并应用到实际项目中。具备良好的团队协作能力和沟通能力，能够高效完成团队任务。
            对技术充满热情，持续关注行业前沿技术，致力于成为一名优秀的软件工程师。
            希望能够在优秀的团队中发挥自己的专业能力，为企业创造价值的同时实现个人职业发展。
          </p>
          
          <h3>技能栈</h3>
          <div className="skill-tags-container">
            <span className="skill-tag-item">Java</span>
            <span className="skill-tag-item">Python</span>
            <span className="skill-tag-item">JavaScript</span>
            <span className="skill-tag-item">TypeScript</span>
            <span className="skill-tag-item">Go</span>
            <span className="skill-tag-item">C++</span>
            <span className="skill-tag-item">C#</span>
            <span className="skill-tag-item">React</span>
            <span className="skill-tag-item">Vue.js</span>
            <span className="skill-tag-item">HTML5</span>
            <span className="skill-tag-item">CSS3</span>
            <span className="skill-tag-item">Node.js</span>
            <span className="skill-tag-item">Express</span>
            <span className="skill-tag-item">FastAPI</span>
            <span className="skill-tag-item">Spring Boot</span>
            <span className="skill-tag-item">微服务</span>
            <span className="skill-tag-item">MySQL</span>
            <span className="skill-tag-item">MongoDB</span>
            <span className="skill-tag-item">Redis</span>
            <span className="skill-tag-item">Neo4j</span>
            <span className="skill-tag-item">Docker</span>
            <span className="skill-tag-item">Kubernetes</span>
            <span className="skill-tag-item">CI/CD</span>
            <span className="skill-tag-item">Git</span>
            <span className="skill-tag-item">Linux</span>
            <span className="skill-tag-item">AWS</span>
            <span className="skill-tag-item">PyTorch</span>
            <span className="skill-tag-item">TensorFlow</span>
            <span className="skill-tag-item">LangChain</span>
            <span className="skill-tag-item">NLP</span>
          </div>
        </section>

        {/* 最新文章 */}
        <section className="home-section fade-in">
          <h2>📝 最新文章</h2>
          <div className="posts-list">
            {latestPosts.map(post => (
              <article key={post.id} className="post-card">
                <div className="post-card-header">
                  <h3><Link to={post.url}>{post.title}</Link></h3>
                  <div className="post-meta">
                    <time dateTime={post.date}>
                      <i className="far fa-calendar"></i> {formatDate(post.date)}
                    </time>
                    {post.tags.length > 0 && (
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="tag">#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="post-card-content">
                  <p>{post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}</p>
                </div>
                <div className="post-card-footer">
                  <Link to={post.url} className="read-more">阅读全文 <i className="fas fa-arrow-right"></i></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link to="/blog" className="btn-primary">
              查看所有文章 <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
