---
layout: default
title: Baud的个人空间
description: Baud的个人网站 - 分享技术见解和生活思考
---

<div class="home-hero">
    <div class="container">
        <h1>Hello，大家好！</h1>
        <p>我是Baud，欢迎来到我的个人空间</p>
        <div class="hero-actions">
            <a href="{{ '/blog/' | relative_url }}" class="btn-hero">
                探索博客 <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
</div>

<div class="container">
    <!-- 统计数据 -->
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-number" data-target="50">0</div>
            <div class="stat-label">项目经验</div>
        </div>
        <div class="stat-card">
            <div class="stat-number" data-target="100">0</div>
            <div class="stat-label">技术文章</div>
        </div>
        <div class="stat-card">
            <div class="stat-number" data-target="5">0</div>
            <div class="stat-label">年开发经验</div>
        </div>
        <div class="stat-card">
            <div class="stat-number" data-target="1000">0</div>
            <div class="stat-label">GitHub Stars</div>
        </div>
    </div>

    <!-- 关于我 -->
    <section class="home-section fade-in">
        <h2>👨💻 关于我</h2>
        
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
        
        <h3>兴趣爱好</h3>
        <p>
            除了编程，我还喜欢阅读技术文档、参与开源社区、撰写技术博客。我相信技术可以改变世界，希望通过代码创造有价值的产品。
        </p>
        <ul>
            <li>编程与开发</li>
            <li>开源项目贡献</li>
            <li>技术写作和博客</li>
            <li>阅读技术文档</li>
            <li>学习新技术</li>
            <li>参与技术社区</li>
        </ul>
        
        <h3>技能栈</h3>
        <div class="skill-tags-container">
            <span class="skill-tag-item">Java</span>
            <span class="skill-tag-item">Python</span>
            <span class="skill-tag-item">JavaScript</span>
            <span class="skill-tag-item">TypeScript</span>
            <span class="skill-tag-item">Go</span>
            <span class="skill-tag-item">C++</span>
            <span class="skill-tag-item">C#</span>
            <span class="skill-tag-item">React</span>
            <span class="skill-tag-item">Vue.js</span>
            <span class="skill-tag-item">HTML5</span>
            <span class="skill-tag-item">CSS3</span>
            <span class="skill-tag-item">Node.js</span>
            <span class="skill-tag-item">Express</span>
            <span class="skill-tag-item">FastAPI</span>
            <span class="skill-tag-item">Spring Boot</span>
            <span class="skill-tag-item">微服务</span>
            <span class="skill-tag-item">MySQL</span>
            <span class="skill-tag-item">MongoDB</span>
            <span class="skill-tag-item">Redis</span>
            <span class="skill-tag-item">Neo4j</span>
            <span class="skill-tag-item">Docker</span>
            <span class="skill-tag-item">Kubernetes</span>
            <span class="skill-tag-item">CI/CD</span>
            <span class="skill-tag-item">Git</span>
            <span class="skill-tag-item">Linux</span>
            <span class="skill-tag-item">AWS</span>
            <span class="skill-tag-item">PyTorch</span>
            <span class="skill-tag-item">TensorFlow</span>
            <span class="skill-tag-item">LangChain</span>
            <span class="skill-tag-item">NLP</span>
        </div>
    </section>

    <!-- 我的项目 -->
    <section class="home-section fade-in">
        <h2>🚀 我的项目</h2>
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-brain"></i>
                </div>
                <div class="project-content">
                    <h3>🚀 智能RAG系统</h3>
                    <p>基于知识图谱的检索增强生成系统，结合了向量数据库和知识图谱技术，提供精准的问答和文档检索能力。使用Python、FastAPI和Neo4j构建。</p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">FastAPI</span>
                        <span class="project-tag">Neo4j</span>
                        <span class="project-tag">LangChain</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div class="project-content">
                    <h3>💻 全栈Web应用</h3>
                    <p>使用React和Node.js开发的企业级Web应用，包含用户认证、实时数据同步、文件上传等功能。采用微服务架构，支持高并发访问。</p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">Node.js</span>
                        <span class="project-tag">Express</span>
                        <span class="project-tag">MongoDB</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-chart-bar"></i>
                </div>
                <div class="project-content">
                    <h3>📊 数据分析平台</h3>
                    <p>Python驱动的数据分析工具，提供数据可视化、统计分析、机器学习模型训练等功能。支持多种数据源导入和实时数据处理。</p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">Pandas</span>
                        <span class="project-tag">Matplotlib</span>
                        <span class="project-tag">Flask</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="project-content">
                    <h3>🤖 AI聊天机器人</h3>
                    <p>基于大语言模型的智能聊天机器人，支持多轮对话、上下文理解、情感分析等功能。可集成到Web、移动应用和API服务中。</p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">Transformers</span>
                        <span class="project-tag">Flask</span>
                        <span class="project-tag">WebSocket</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-cloud"></i>
                </div>
                <div class="project-content">
                    <h3>☁️ 云原生应用框架</h3>
                    <p>基于Kubernetes的云原生应用开发框架，提供自动化部署、服务发现、负载均衡等功能。支持Docker容器化部署。</p>
                    <div class="project-tags">
                        <span class="project-tag">Go</span>
                        <span class="project-tag">Kubernetes</span>
                        <span class="project-tag">Docker</span>
                        <span class="project-tag">gRPC</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="project-content">
                    <h3>📱 移动端应用</h3>
                    <p>跨平台移动应用，使用React Native开发，支持iOS和Android平台。包含用户管理、内容展示、社交分享等功能。</p>
                    <div class="project-tags">
                        <span class="project-tag">React Native</span>
                        <span class="project-tag">Redux</span>
                        <span class="project-tag">Firebase</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div class="project-content">
                    <h3>💻 企业级全栈Web应用平台</h3>
                    <p>为企业开发的内部管理系统，包含用户管理、数据可视化、文件管理等功能模块。使用React + TypeScript开发前端，Node.js + Express构建后端，采用微服务架构。</p>
                    <div class="project-tags">
                        <span class="project-tag">React</span>
                        <span class="project-tag">TypeScript</span>
                        <span class="project-tag">Node.js</span>
                        <span class="project-tag">Express</span>
                        <span class="project-tag">MongoDB</span>
                        <span class="project-tag">Redis</span>
                        <span class="project-tag">Docker</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-brain"></i>
                </div>
                <div class="project-content">
                    <h3>🧠 基于深度学习的图像分类系统</h3>
                    <p>基于卷积神经网络的图像分类系统，用于学术研究和论文发表。使用PyTorch框架构建CNN模型，实现了图像分类功能，分类准确率达到92%。</p>
                    <div class="project-tags">
                        <span class="project-tag">Python</span>
                        <span class="project-tag">PyTorch</span>
                        <span class="project-tag">Flask</span>
                        <span class="project-tag">OpenCV</span>
                        <span class="project-tag">NumPy</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-cloud"></i>
                </div>
                <div class="project-content">
                    <h3>☁️ 分布式任务调度系统</h3>
                    <p>基于微服务架构的分布式任务调度系统，支持任务分配、负载均衡和故障恢复。使用Go语言开发核心模块，Kubernetes进行容器编排，实现了高效的并发处理。</p>
                    <div class="project-tags">
                        <span class="project-tag">Go</span>
                        <span class="project-tag">Kubernetes</span>
                        <span class="project-tag">gRPC</span>
                        <span class="project-tag">Redis</span>
                        <span class="project-tag">Docker</span>
                    </div>
                    <a href="{{ site.social_links.github }}" target="_blank" class="project-link">
                        查看详情 <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- 工作经历 -->
    <section class="home-section fade-in">
        <h2>💼 工作经历</h2>
        <div>
            <div></div>
            
            <div>
                <div></div>
                <div>
                    <h3>🏢 高级全栈工程师</h3>
                    <p><strong>2023 - 至今</strong></p>
                    <p>负责企业级Web应用的架构设计和开发，带领团队完成多个重要项目。技术栈包括React、Node.js、微服务架构。</p>
                </div>
            </div>

            <div>
                <div></div>
                <div>
                    <h3>💼 后端开发工程师</h3>
                    <p><strong>2021 - 2023</strong></p>
                    <p>专注于高性能后端服务开发，使用Java和Go语言构建可扩展的分布式系统。参与设计并实现了多个核心业务模块。</p>
                </div>
            </div>

            <div>
                <div></div>
                <div>
                    <h3>🎓 初级开发工程师</h3>
                    <p><strong>2020 - 2021</strong></p>
                    <p>参与Web应用开发，学习并实践前端和后端技术。完成了多个项目的开发任务，积累了丰富的实战经验。</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 最新动态 -->
    <section class="home-section fade-in">
        <h2>📅 最新动态</h2>
        <div>
            <div></div>
            
            <div>
                <div></div>
                <div>
                    <p><strong>2025年11月</strong> - 开始学习新的前端框架Next.js，并开始构建个人博客系统</p>
                </div>
            </div>

            <div>
                <div></div>
                <div>
                    <p><strong>2025年10月</strong> - 发布了新的技术博客文章《构建高性能RAG系统的实践与思考》</p>
                </div>
            </div>

            <div>
                <div></div>
                <div>
                    <p><strong>2025年9月</strong> - 创建开源项目，获得1000+ GitHub Stars，社区反响热烈</p>
                </div>
            </div>

            <div>
                <div></div>
                <div>
                    <p><strong>2025年8月</strong> - 完成了大型企业级项目的架构设计和开发工作</p>
                </div>
            </div>

            <div>
                <div></div>
                <div>
                    <p><strong>2025年7月</strong> - 参加了技术大会，分享了《微服务架构实践》主题演讲</p>
                </div>
            </div>

            <div>
                <div></div>
                <div>
                    <p><strong>2025年6月</strong> - 开始深入研究AI和LLM技术，启动了知识图谱RAG项目</p>
                </div>
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
        <div>
            <a href="{{ '/blog/' | relative_url }}" class="read-more">
                查看所有文章 <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </section>

    <!-- 联系方式 -->
    <section class="home-section fade-in">
        <h2>🔗 找到我</h2>
        <p>关注我，获取最新技术动态和文章更新</p>
        <div class="links">
            <a href="{{ site.social_links.zhihu }}" target="_blank" rel="noopener noreferrer" class="link-card">
                <h3>📚 知乎</h3>
                <p>分享技术见解和生活思考，关注前沿技术和行业动态</p>
            </a>
            
            <a href="{{ site.social_links.csdn }}" target="_blank" rel="noopener noreferrer" class="link-card">
                <h3>💻 CSDN博客</h3>
                <p>技术文章和学习笔记，涵盖Web开发、AI、系统设计等主题</p>
            </a>
            
            <a href="{{ site.social_links.github }}" target="_blank" rel="noopener noreferrer" class="link-card">
                <h3>🔗 GitHub</h3>
                <p>开源项目和技术实践，欢迎Star和Fork</p>
            </a>
            
            <a href="mailto:{{ site.author.email }}" class="link-card">
                <h3>📧 邮箱联系</h3>
                <p>欢迎技术交流、项目合作和求职咨询</p>
            </a>
        </div>
    </section>
</div>

<style>
.links .link-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    border-left-color: var(--primary-color);
}
</style>
