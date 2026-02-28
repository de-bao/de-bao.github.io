import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { posts, getAllTags, getAllYears } from '../data/posts'
import './Blog.css'

function Blog() {
  const [activeTag, setActiveTag] = useState('all')
  const [activeYear, setActiveYear] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('posts')
  const [wikiResults, setWikiResults] = useState(null)
  const [wikiLoading, setWikiLoading] = useState(false)

  const allTags = useMemo(() => getAllTags(), [])
  const allYears = useMemo(() => getAllYears(), [])

  // 筛选文章
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      // 标签筛选
      if (activeTag !== 'all' && !post.tags.includes(activeTag)) {
        return false
      }

      // 年份筛选
      if (activeYear !== 'all') {
        const postYear = post.date.split('-')[0]
        if (postYear !== activeYear) {
          return false
        }
      }

      // 搜索筛选（仅在搜索类型为 posts 时生效）
      if (searchType === 'posts' && searchQuery) {
        const query = searchQuery.toLowerCase()
        const title = post.title.toLowerCase()
        const excerpt = post.excerpt.toLowerCase()
        if (!title.includes(query) && !excerpt.includes(query)) {
          return false
        }
      }

      return true
    })
  }, [activeTag, activeYear, searchQuery, searchType])

  // 维基百科搜索
  const wikiSearch = async () => {
    const query = searchQuery.trim()
    if (!query) {
      setWikiResults(null)
      return
    }

    setWikiLoading(true)
    setWikiResults(null)

    try {
      // 第一步：使用 search API 查找相关文章
      const searchUrl = `https://zh.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=8&srprop=size|wordcount|timestamp|snippet&format=json&origin=*&_=${Date.now()}`
      
      const searchResponse = await fetch(searchUrl)
      const searchData = await searchResponse.json()

      if (!searchData.query || !searchData.query.search || searchData.query.search.length === 0) {
        setWikiResults({ error: '未找到相关结果' })
        setWikiLoading(false)
        return
      }

      const searchResults = searchData.query.search
      const titles = searchResults.map(item => item.title).join('|')

      // 第二步：获取这些文章的详细摘要
      const extractUrl = `https://zh.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=extracts|info&exintro=true&exchars=500&explaintext=true&inprop=url&format=json&origin=*&_=${Date.now()}`

      const extractResponse = await fetch(extractUrl)
      const extractData = await extractResponse.json()

      const pages = extractData.query.pages || {}
      const results = searchResults.map(item => {
        const pageId = String(item.pageid)
        const page = pages[pageId] || Object.values(pages).find(p => p.title === item.title)
        const extract = page && page.extract ? page.extract.trim() : ''
        const url = page && page.fullurl ? page.fullurl : `https://zh.wikipedia.org/wiki/${encodeURIComponent(item.title)}`
        
        let description = extract || (item.snippet ? item.snippet.replace(/<[^>]*>/g, '') : '')
        description = description.replace(/\s+/g, ' ').trim()
        if (description.length > 400) {
          description = description.substring(0, 400) + '...'
        }

        const updateDate = item.timestamp ? new Date(item.timestamp).toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : ''

        return {
          title: item.title,
          description,
          url,
          wordcount: item.wordcount || 0,
          size: item.size || 0,
          updateDate
        }
      })

      setWikiResults({ results })
    } catch (error) {
      console.error('维基百科搜索失败:', error)
      setWikiResults({ error: '维基百科服务暂时不可用，请稍后再试' })
    } finally {
      setWikiLoading(false)
    }
  }

  // 搜索输入处理
  useEffect(() => {
    if (searchType === 'wiki') {
      const timer = setTimeout(() => {
        wikiSearch()
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setWikiResults(null)
    }
  }, [searchQuery, searchType])

  // 清除筛选
  const resetFilters = () => {
    setActiveTag('all')
    setActiveYear('all')
    setSearchQuery('')
  }

  // 标签计数
  const getTagCount = (tag) => {
    return posts.filter(post => post.tags.includes(tag)).length
  }

  // 年份计数
  const getYearCount = (year) => {
    return posts.filter(post => post.date.startsWith(year)).length
  }

  // 格式化日期
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月${String(date.getDate()).padStart(2, '0')}日`
  }

  return (
    <div className="blog-page">
      <div className="container">
        <header className="page-header">
          <h1>博客文章</h1>
          <p>分享技术见解和学习笔记</p>
        </header>

        {/* 筛选器 */}
        <div className="blog-filters">
          {/* 标签筛选 */}
          <div className="filter-section">
            <h3 className="filter-title">标签筛选</h3>
            <div className="tags-filter">
              <button 
                className={`filter-btn ${activeTag === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTag('all')}
              >
                全部
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag} <span className="filter-count">({getTagCount(tag)})</span>
                </button>
              ))}
            </div>
          </div>

          {/* 时间筛选 */}
          <div className="filter-section">
            <h3 className="filter-title">时间筛选</h3>
            <div className="year-filter">
              <button 
                className={`filter-btn ${activeYear === 'all' ? 'active' : ''}`}
                onClick={() => setActiveYear('all')}
              >
                全部
              </button>
              {allYears.map(year => (
                <button
                  key={year}
                  className={`filter-btn ${activeYear === year ? 'active' : ''}`}
                  onClick={() => setActiveYear(year)}
                >
                  {year}年 <span className="filter-count">({getYearCount(year)})</span>
                </button>
              ))}
            </div>
          </div>

          {/* 搜索框 */}
          <div className="filter-section">
            <h3 className="filter-title">搜索</h3>
            {/* 搜索类型切换 */}
            <div className="search-type-toggle">
              <label className="search-type-option">
                <input 
                  type="radio" 
                  name="search-type" 
                  value="posts" 
                  checked={searchType === 'posts'}
                  onChange={() => setSearchType('posts')}
                />
                <span>搜索文章标题或内容</span>
              </label>
              <label className="search-type-option">
                <input 
                  type="radio" 
                  name="search-type" 
                  value="wiki"
                  checked={searchType === 'wiki'}
                  onChange={() => setSearchType('wiki')}
                />
                <span>搜索维基百科</span>
              </label>
            </div>
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                id="search-input" 
                placeholder={searchType === 'posts' ? '搜索文章标题或内容...' : '搜索维基百科...'}
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchType === 'wiki') {
                    wikiSearch()
                  }
                }}
              />
            </div>
            {/* 维基百科搜索结果 */}
            {searchType === 'wiki' && (
              <div id="wiki-results" className="wiki-results">
                {wikiLoading && <div className="wiki-loading">📡 正在搜索维基百科...</div>}
                {wikiResults && wikiResults.error && (
                  <div className="wiki-error">❌ {wikiResults.error}</div>
                )}
                {wikiResults && wikiResults.results && (
                  <>
                    <div style={{ marginBottom: '15px' }}>
                      <strong>共找到 {wikiResults.results.length} 个结果：</strong>
                    </div>
                    <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                      {wikiResults.results.map((item, index) => (
                        <li key={index} style={{ marginBottom: '20px', padding: '15px', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                          <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>
                            <strong style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</strong>
                          </a>
                          {item.description ? (
                            <div style={{ color: 'var(--color-text-primary)', fontSize: '0.95rem', lineHeight: 1.7, marginTop: '10px', marginBottom: '12px', textAlign: 'justify' }}>
                              {item.description}
                            </div>
                          ) : (
                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '8px', marginBottom: '12px' }}>暂无摘要</div>
                          )}
                          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
                            {item.wordcount > 0 && <span title="文章字数">📝 {item.wordcount.toLocaleString()} 字</span>}
                            {item.size > 0 && <span title="文章大小">📄 {(item.size / 1024).toFixed(1)} KB</span>}
                            {item.updateDate && <span title="最后更新">🕒 {item.updateDate}</span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '15px', textAlign: 'center', paddingTop: '15px', borderTop: '1px solid var(--color-border)' }}>
                      💡 点击标题跳转至维基百科原文（新标签页）
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 文章列表 */}
        {searchType === 'posts' && (
          <>
            <div className="posts-list" id="posts-list">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <article key={post.id} className="post-card">
                    <div className="post-card-header">
                      <h2><Link to={post.url}>{post.title}</Link></h2>
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
                      <p>{post.excerpt}</p>
                    </div>
                    <div className="post-card-footer">
                      <Link to={post.url} className="read-more">阅读全文 <i className="fas fa-arrow-right"></i></Link>
                    </div>
                  </article>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                  <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>没有找到匹配的文章</p>
                  <button className="filter-btn" onClick={resetFilters} style={{ marginTop: '1rem' }}>清除筛选</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Blog
