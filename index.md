---
layout: default
title: Baud的个人主页
description: Baud的个人网站 - 分享技术见解和生活思考
---

<div class="home-hero">
    <div class="container">
        <h1 class="floating">欢迎来到我的个人网站</h1>
        <p>{{ site.description }}</p>
        <div style="margin-top: 2rem;">
            <a href="{{ '/blog/' | relative_url }}" class="read-more" style="background: rgba(255,255,255,0.2); color: white; padding: 1rem 2rem; border-radius: 30px; backdrop-filter: blur(10px);">
                探索博客 <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
</div>

<div class="container">
    <!-- 关于我 -->
    <section class="home-section fade-in">
        <h2>👨💻 关于我</h2>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">{{ site.author.bio }}</p>
        <p style="font-weight: 600; margin-bottom: 1rem;">目前专注于：</p>
        <div class="skills-grid">
            <div class="skill-card">
                <div class="skill-icon"><i class="fas fa-code"></i></div>
                <h3>Web 开发</h3>
                <p>全栈开发，构建现代化Web应用</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon"><i class="fas fa-rocket"></i></div>
                <h3>开源项目</h3>
                <p>贡献开源，分享技术成果</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon"><i class="fas fa-pen-fancy"></i></div>
                <h3>技术写作</h3>
                <p>分享知识，记录成长历程</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon"><i class="fas fa-lightbulb"></i></div>
                <h3>创新思维</h3>
                <p>探索新技术，解决实际问题</p>
            </div>
        </div>
    </section>

    <!-- 技术栈 -->
    <section class="home-section fade-in">
        <h2>🛠️ 技术栈</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <div class="skill-icon"><i class="fab fa-js-square"></i></div>
                <h3>JavaScript</h3>
                <p>ES6+, TypeScript, Node.js</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon"><i class="fab fa-react"></i></div>
                <h3>React</h3>
                <p>React Hooks, Next.js, Redux</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon"><i class="fab fa-vuejs"></i></div>
                <h3>Vue.js</h3>
                <p>Vue 3, Nuxt.js, Vuex</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon"><i class="fab fa-python"></i></div>
                <h3>Python</h3>
                <p>Django, Flask, 数据分析</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon"><i class="fas fa-database"></i></div>
                <h3>数据库</h3>
                <p>MySQL, MongoDB, Redis</p>
            </div>
            <div class="skill-card">
                <div class="skill-icon"><i class="fab fa-docker"></i></div>
                <h3>DevOps</h3>
                <p>Docker, CI/CD, Linux</p>
            </div>
        </div>
    </section>

    <!-- 项目展示 -->
    <section class="home-section fade-in">
        <h2>🚀 精选项目</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-blog"></i>
                </div>
                <div class="project-content">
                    <h3>个人博客系统</h3>
                    <p>基于 Jekyll 搭建的现代化技术博客，支持标签分类、归档、RSS订阅等功能。采用响应式设计，完美适配各种设备。</p>
                    <div class="project-tags">
                        <span class="project-tag">Jekyll</span>
                        <span class="project-tag">GitHub Pages</span>
                        <span class="project-tag">Markdown</span>
                    </div>
                    <a href="{{ '/blog/' | relative_url }}" class="project-link">
                        查看详情 <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                    <i class="fas fa-tools"></i>
                </div>
                <div class="project-content">
                    <h3>开发工具集合</h3>
                    <p>日常开发中常用的工具和小组件集合，包括代码格式化、API测试、数据转换等实用工具，提高开发效率。</p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">TypeScript</span>
                        <span class="project-tag">Vite</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        访问项目 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
            <div class="project-card">
                <div class="project-image" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="project-content">
                    <h3>移动端应用</h3>
                    <p>跨平台移动应用开发，使用 React Native 构建，支持 iOS 和 Android 平台，提供流畅的用户体验。</p>
                    <div class="project-tags">
                        <span class="project-tag">React Native</span>
                        <span class="project-tag">移动开发</span>
                        <span class="project-tag">跨平台</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看代码 <i class="fas fa-code"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- 统计数据 -->
    <section class="home-section fade-in">
        <h2>📊 数据统计</h2>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">50+</div>
                <div class="stat-label">技术文章</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">10+</div>
                <div class="stat-label">开源项目</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">1000+</div>
                <div class="stat-label">GitHub Stars</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">5年</div>
                <div class="stat-label">开发经验</div>
            </div>
        </div>
    </section>

    <!-- 最新文章 -->
    <section class="home-section fade-in">
        <h2>📝 最新文章</h2>
        <div class="posts-list">
            {% for post in site.posts limit: 3 %}
            <article class="post-card">
                <div class="post-card-header">
                    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                    <div class="post-meta">
                        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
                            <i class="far fa-calendar"></i> {{ post.date | date: "%Y年%m月%d日" }}
                        </time>
                        {% if post.tags.size > 0 %}
                        <div class="post-tags">
                            {% for tag in post.tags limit: 3 %}
                            <a href="{{ '/tags/' | relative_url }}#{{ tag | slugify }}" class="tag">#{{ tag }}</a>
                            {% endfor %}
                        </div>
                        {% endif %}
                    </div>
                </div>
                <div class="post-card-content">
                    {% if post.excerpt %}
                    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                    {% endif %}
                </div>
                <div class="post-card-footer">
                    <a href="{{ post.url | relative_url }}" class="read-more">阅读全文 <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
            {% endfor %}
        </div>
        <div style="text-align: center; margin-top: 3rem;">
            <a href="{{ '/blog/' | relative_url }}" class="read-more" style="padding: 1rem 2.5rem; font-size: 1.1rem; background: var(--primary-gradient); color: white; border-radius: 30px; box-shadow: var(--shadow-md);">
                查看所有文章 <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </section>

    <!-- 社交媒体 -->
    <section class="home-section fade-in">
        <h2>🔗 社交媒体</h2>
        <p style="text-align: center; margin-bottom: 2rem; color: var(--text-light);">关注我，获取最新技术动态和文章更新</p>
        <div class="social-links" style="justify-content: center; margin-top: 1rem;">
            <a href="{{ site.social_links.github }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style="width: 70px; height: 70px; font-size: 1.8rem;">
                <i class="fab fa-github"></i>
            </a>
            <a href="{{ site.social_links.zhihu }}" target="_blank" rel="noopener noreferrer" aria-label="知乎" style="width: 70px; height: 70px; font-size: 1.8rem;">
                <i class="fab fa-zhihu"></i>
            </a>
            <a href="{{ site.social_links.csdn }}" target="_blank" rel="noopener noreferrer" aria-label="CSDN" style="width: 70px; height: 70px; font-size: 1.8rem;">
                <i class="fas fa-blog"></i>
            </a>
        </div>
    </section>
</div>
