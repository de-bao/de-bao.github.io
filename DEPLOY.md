# 部署指南

## 🚀 快速部署到 GitHub Pages

### 方法一：使用部署脚本（最简单）

```bash
./deploy.sh
```

脚本会提示你输入提交信息，然后自动推送到 GitHub。

### 方法二：手动部署

```bash
# 1. 添加所有更改
git add .

# 2. 提交更改
git commit -m "更新博客内容"

# 3. 推送到 GitHub
git push origin main
```

### 方法三：一行命令部署

```bash
git add . && git commit -m "更新博客" && git push origin main
```

## 📋 部署步骤详解

1. **确保已安装 Git**
   ```bash
   git --version
   ```

2. **检查远程仓库**
   ```bash
   git remote -v
   ```
   应该显示：`origin https://github.com/de-bao/de-bao.github.io.git`

3. **添加更改**
   ```bash
   git add .
   ```

4. **提交更改**
   ```bash
   git commit -m "你的提交信息"
   ```

5. **推送到 GitHub**
   ```bash
   git push origin main
   ```

## ⏱️ 等待部署

- GitHub Pages 通常需要 **1-5 分钟** 来构建和部署
- 访问 https://de-bao.github.io 查看更新后的网站

## 🔍 验证部署

1. 访问你的网站：https://de-bao.github.io
2. 检查 GitHub 仓库的 Actions 标签页（如果有）
3. 检查 Settings > Pages 查看部署状态

## 💡 提示

- 每次推送后，GitHub Pages 会自动重新构建
- 如果遇到问题，检查 `_config.yml` 配置是否正确
- 确保所有插件在 Gemfile 中已正确配置

## 🐛 常见问题

### 问题：网站没有更新

**解决方案：**
- 等待几分钟后刷新
- 清除浏览器缓存（Ctrl+F5 或 Cmd+Shift+R）
- 检查 GitHub 仓库的 Pages 设置

### 问题：构建失败

**解决方案：**
- 检查 `_config.yml` 语法是否正确
- 确保所有必需的插件都已安装
- 查看 GitHub Actions 的错误日志

### 问题：样式丢失

**解决方案：**
- 检查 `baseurl` 配置是否正确（应该是空字符串 `""`）
- 确保 CSS 文件路径正确
- 检查 `_config.yml` 中的 `url` 设置

