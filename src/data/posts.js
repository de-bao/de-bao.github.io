// 博客文章数据 - 从_posts目录迁移
// 注意：实际项目中可以通过API或构建时生成这个文件

export const posts = [
  {
    id: '2024-01-01-welcome',
    title: '欢迎来到我的博客',
    date: '2024-01-01',
    tags: ['博客', '欢迎'],
    excerpt: '这是我的第一篇博客文章，欢迎来到我的个人网站！',
    url: '/blog/2024/01/01/welcome/',
    readTime: 3
  },
  {
    id: '2024-01-15-jekyll-tips',
    title: 'Jekyll 使用技巧和最佳实践',
    date: '2024-01-15',
    tags: ['Jekyll', '博客', '教程'],
    excerpt: '分享一些 Jekyll 博客的使用技巧和最佳实践，帮助你更好地管理你的博客。',
    url: '/blog/2024/01/15/jekyll-tips/',
    readTime: 5
  },
  {
    id: '2024-02-01-react-best-practices',
    title: 'React 最佳实践与性能优化完整指南',
    date: '2024-02-01',
    tags: ['React', '前端', '性能优化', '最佳实践'],
    excerpt: '深入探讨 React 开发中的最佳实践和性能优化技巧，包括组件设计、状态管理、性能优化等核心话题，帮助开发者构建高质量的应用。',
    url: '/blog/2024/02/01/react-best-practices/',
    readTime: 20
  },
  {
    id: '2024-02-15-web-performance',
    title: 'Web 性能优化：从理论到实践',
    date: '2024-02-15',
    tags: ['性能优化', 'Web开发', '前端', '最佳实践'],
    excerpt: '全面介绍 Web 性能优化的各种技巧和方法，包括资源加载、代码优化、缓存策略等，帮助构建快速响应的现代 Web 应用。',
    url: '/blog/2024/02/15/web-performance/',
    readTime: 12
  },
  {
    id: '2025-02-01-algorithm-optimization',
    title: '算法优化实战：时间复杂度与空间复杂度的平衡艺术',
    date: '2025-02-01',
    tags: ['算法', '数据结构', '优化', '时间复杂度', '空间复杂度'],
    excerpt: '深入探讨算法优化的核心思想，通过实际案例展示如何在时间复杂度和空间复杂度之间找到最佳平衡点。',
    url: '/blog/2025/02/01/algorithm-optimization/',
    readTime: 8
  },
  {
    id: '2025-03-15-system-design',
    title: '系统设计实战：高并发系统的架构设计原则',
    date: '2025-03-15',
    tags: ['系统设计', '架构', '高并发', '分布式系统', '最佳实践'],
    excerpt: '分享高并发系统设计的核心原则和实战经验，包括负载均衡、缓存策略、数据库设计等关键技术的应用。',
    url: '/blog/2025/03/15/system-design/',
    readTime: 13
  },
  {
    id: '2025-05-01-docker-kubernetes',
    title: 'Docker与Kubernetes实战：容器化部署最佳实践',
    date: '2025-05-01',
    tags: ['Docker', 'Kubernetes', '容器化', 'DevOps', '云原生'],
    excerpt: '分享Docker容器化和Kubernetes编排的实战经验，包括多阶段构建、资源管理、服务发现等生产环境最佳实践。',
    url: '/blog/2025/05/01/docker-kubernetes/',
    readTime: 11
  },
  {
    id: '2025-07-20-fastapi-production',
    title: 'FastAPI生产环境部署：高并发API服务实践',
    date: '2025-07-20',
    tags: ['FastAPI', '生产环境', '高并发', 'API设计', '性能优化'],
    excerpt: '分享FastAPI在生产环境中的部署经验，包括异步处理、连接池优化、监控告警等最佳实践，实现高并发API服务。',
    url: '/blog/2025/07/20/fastapi-production/',
    readTime: 9
  },
  {
    id: '2025-08-15-knowledge-graph-rag',
    title: '知识图谱增强RAG：结构化知识融合实践',
    date: '2025-08-15',
    tags: ['知识图谱', 'RAG', 'Neo4j', '知识融合'],
    excerpt: '探讨如何将知识图谱与RAG系统结合，通过结构化知识提升检索和生成的准确性，分享Neo4j与向量数据库的混合检索方案。',
    url: '/blog/2025/08/15/knowledge-graph-rag/',
    readTime: 11
  },
  {
    id: '2025-09-05-distributed-training',
    title: '分布式训练实战：DeepSpeed ZeRO技术详解',
    date: '2025-09-05',
    tags: ['分布式训练', 'DeepSpeed', 'ZeRO', '大模型训练'],
    excerpt: '深入解析DeepSpeed ZeRO技术，分享在多GPU环境下训练大模型的实践经验，包括ZeRO-1、ZeRO-2和ZeRO-3的区别与应用。',
    url: '/blog/2025/09/05/distributed-training/',
    readTime: 12
  },
  {
    id: '2025-10-10-model-quantization',
    title: '模型量化技术：INT8和INT4量化实战指南',
    date: '2025-10-10',
    tags: ['模型量化', '推理优化', 'INT8', 'INT4', '深度学习'],
    excerpt: '详细介绍模型量化技术，包括INT8和INT4量化方法，分享在生产环境中部署量化模型的实践经验。',
    url: '/blog/2025/10/10/model-quantization/',
    readTime: 10
  },
  {
    id: '2025-11-20-large-model-finetuning',
    title: '大模型微调实战：LoRA与QLoRA技术详解',
    date: '2025-11-20',
    tags: ['大模型', '微调', 'LoRA', 'QLoRA', '深度学习'],
    excerpt: '深入解析LoRA和QLoRA参数高效微调技术，分享在资源受限环境下微调大语言模型的实践经验。',
    url: '/blog/2025/11/20/large-model-finetuning/',
    readTime: 15
  },
  {
    id: '2025-12-12-distributed-task-scheduler',
    title: '分布式任务调度系统：微服务架构实践',
    date: '2025-12-12',
    tags: ['Go', 'Kubernetes', 'gRPC', 'Redis', 'Docker', '分布式系统'],
    excerpt: '基于微服务架构的分布式任务调度系统，支持任务分配、负载均衡和故障恢复。使用Go语言开发核心模块，Kubernetes进行容器编排，实现了高效的并发处理。',
    url: '/blog/2025/12/12/distributed-task-scheduler/',
    readTime: 10
  },
  {
    id: '2025-12-15-rag-system-optimization',
    title: 'RAG系统性能优化实战：从理论到生产环境',
    date: '2025-12-15',
    tags: ['RAG', 'AI', '性能优化', '向量数据库'],
    excerpt: '深入探讨RAG系统的性能优化策略，包括向量检索优化、缓存机制设计和并发处理方案，分享在生产环境中的实践经验。',
    url: '/blog/2025/12/15/rag-system-optimization/',
    readTime: 12
  }
]

// 获取所有标签
export function getAllTags() {
  const tagSet = new Set()
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}

// 获取所有年份
export function getAllYears() {
  const yearSet = new Set()
  posts.forEach(post => {
    const year = post.date.split('-')[0]
    yearSet.add(year)
  })
  return Array.from(yearSet).sort().reverse()
}

// 按标签筛选
export function getPostsByTag(tag) {
  return posts.filter(post => post.tags.includes(tag))
}

// 按年份筛选
export function getPostsByYear(year) {
  return posts.filter(post => post.date.startsWith(year))
}
