# Baud 个人博客

基于 Jekyll 和 GitHub Pages 搭建的现代化个人博客网站，采用纯CSS设计系统。

## ✨ 功能特性

- 🎨 现代化响应式设计（深色主题）
- 📱 移动端友好
- 📝 文章分类和标签系统
- 🔍 博客页面集成标签、年份和搜索筛选功能
- 📄 文章分页功能
- 🔗 RSS Feed 支持
- 📊 SEO 优化
- 🎯 快速导航菜单
- 📄 个人简历页面（支持明暗模式切换和PDF打印）
- 🌟 未来规划展示
- 💫 生活点滴记录

## 📁 项目结构

```
de-bao.github.io/
├── _config.yml          # Jekyll 配置文件
├── _layouts/            # 页面布局模板
│   ├── default.html     # 默认布局
│   ├── post.html        # 文章详情页布局
│   ├── blog.html        # 博客列表页布局
│   ├── tags.html        # 标签页布局
│   ├── archive.html     # 归档页布局
│   └── page.html        # 普通页面布局
├── _pages/              # 页面文件
│   ├── archive.html     # 归档页面（重定向到博客）
│   └── tags.html        # 标签页面（重定向到博客）
├── _posts/              # 博客文章目录
├── assets/              # 静态资源
│   ├── css/
│   │   └── main.css     # 主样式文件（纯CSS）
│   ├── js/
│   │   └── main.js      # 主脚本文件
│   └── favicon.svg      # 网站图标
├── resume/              # 简历页面
│   ├── index.html       # 个人简历
│   ├── photo.jpg        # 个人照片
│   └── resume.pdf       # PDF简历
├── future/              # 未来规划页面
│   └── index.html       # 未来规划内容（使用Jekyll布局，样式与首页一致）
├── life/                # 生活点滴页面
│   └── index.html       # 生活点滴内容（使用Jekyll布局，样式与首页一致）
├── blog/                # 博客目录
│   └── index.html       # 博客列表页
├── index.md             # 首页
├── Gemfile              # Ruby 依赖
├── deploy.sh            # 部署脚本
└── README.md            # 项目说明
```

## 🚀 快速开始

### 本地开发

1. **安装依赖**
   ```bash
   bundle install
   ```

2. **启动本地服务器**
   ```bash
   bundle exec jekyll serve
   ```

3. **访问网站**
   打开浏览器访问 `http://localhost:4000`

### 部署到 GitHub Pages

#### 方法一：使用部署脚本（推荐）

```bash
./deploy.sh
```

脚本会自动：
- 添加所有更改
- 提交更改（可自定义提交信息）
- 推送到 GitHub

#### 方法二：手动部署

```bash
# 1. 添加所有更改
git add .

# 2. 提交更改
git commit -m "更新博客"

# 3. 推送到 GitHub
git push origin main
```

GitHub Pages 会自动构建和部署，通常需要 **1-5 分钟**。

访问地址：https://de-bao.github.io

#### 方法三：使用 Token 推送（避免输入密码）

如果遇到认证问题，可以使用 Personal Access Token：

1. **创建 Token**（在 GitHub Settings → Developer settings → Personal access tokens）
   - 勾选 `repo` 权限
   - 复制生成的 Token

2. **使用 Token 推送**
   ```bash
   # 配置 Git 记住凭据（只需一次）
   git config --global credential.helper store
   
   # 推送时输入用户名和 Token
   git push origin main
   # 用户名：de-bao
   # 密码：粘贴你的 Token（不是 GitHub 密码）
   ```

3. **以后推送就不需要输入了**

## 📝 编写新文章

1. 在 `_posts/` 目录下创建新文件
2. 文件命名格式：`YYYY-MM-DD-title.md`
3. 添加 Front Matter：

```yaml
---
layout: post
title: "文章标题"
date: 2024-01-20
tags: [标签1, 标签2]
categories: [分类]
excerpt: "文章摘要"
read_time: 5
---
```

4. 使用 Markdown 编写文章内容

## 🎨 设计系统

本项目采用纯CSS设计系统，无框架依赖。

### 配色方案
- **背景**: `#0a0a0a` (深色)
- **卡片**: `#1a1a1a` (深灰)
- **文字**: `#ffffff` / `#b3b3b3` (主/次)
- **强调色**: `#6366f1` (蓝紫色)

### 字体
- **标题**: Space Grotesk
- **正文**: Inter

### 特性
- 玻璃态导航栏（backdrop-filter）
- 流畅的动画过渡
- 响应式网格布局
- 滚动动画（Intersection Observer）
- 数字递增动画

## 🎯 页面导航

网站包含以下主要页面：

- **首页** - `https://de-bao.github.io/` - 个人介绍、项目展示、技能栈、联系方式
- **博客** - `https://de-bao.github.io/blog/` - 博客文章列表，支持标签、年份和搜索筛选
- **简历** - `https://de-bao.github.io/resume/` - 个人简历，支持明暗模式切换和PDF打印
- **未来** - `https://de-bao.github.io/future/` - 职业目标、项目计划、技能提升计划、推荐书籍
- **生活** - `https://de-bao.github.io/life/` - 生活理念、旅行经历、阅读兴趣、运动习惯、兴趣爱好

> **注意**：标签和归档功能已整合到博客页面，不再有独立页面。

## 🛠️ 自定义配置

编辑 `_config.yml` 文件来修改：

- 网站标题和描述
- 作者信息
- 社交链接
- 导航菜单
- 分页设置

### 导航菜单配置

```yaml
navigation:
  - title: 首页
    url: /
  - title: 博客
    url: /blog/
  - title: 简历
    url: /resume/
  - title: 未来
    url: /future/
  - title: 生活
    url: /life/
```

> **注意**：标签和归档功能已整合到博客页面，可通过博客页面的筛选器使用。

## 📚 功能说明

### 博客筛选功能

博客页面（`/blog/`）集成了强大的筛选功能：

1. **标签筛选** - 点击标签按钮筛选对应标签的文章
2. **年份筛选** - 按年份查看文章
3. **搜索功能** - 实时搜索文章标题和内容
4. **组合筛选** - 支持多条件组合筛选

文章可以添加多个标签：

```yaml
tags: [Jekyll, 博客, 教程]
```

标签会自动出现在：
- 文章详情页
- 博客页面的标签筛选器

### 分页功能

在 `_config.yml` 中设置每页显示的文章数：

```yaml
paginate: 5
```

## 🛠️ 技术栈

- **Jekyll** - 静态网站生成器
- **GitHub Pages** - 免费网站托管
- **Markdown** - 内容编写
- **纯CSS** - 无框架依赖的现代CSS设计系统
- **JavaScript** - 交互效果和动画
- **Font Awesome** - 图标库

## 🐛 常见问题

### 网站没有更新
- 等待几分钟后刷新
- 清除浏览器缓存（Ctrl+F5 或 Cmd+Shift+R）
- 检查 GitHub 仓库的 Pages 设置

### 构建失败
- 检查 `_config.yml` 语法是否正确
- 确保所有必需的插件都已安装
- 查看 GitHub Actions 的错误日志

### 样式丢失
- 检查 `baseurl` 配置是否正确（应该是空字符串 `""`）
- 确保 CSS 文件路径正确
- 检查 `_config.yml` 中的 `url` 设置

### 推送认证问题
- 使用 Personal Access Token 而不是密码
- 配置 Git Credential Helper：`git config --global credential.helper store`
- 或使用 SSH 密钥（更安全）

## 📄 许可证

MIT License

## 👤 作者

**Baud**

- GitHub: [@de-bao](https://github.com/de-bao)
- 知乎: [baud-17](https://www.zhihu.com/people/baud-17)
- CSDN: [qq_54707385](https://blog.csdn.net/qq_54707385)

---

⭐ 如果这个项目对你有帮助，欢迎 Star！
