#!/bin/bash

# Jekyll 博客部署脚本
# 推送到 GitHub Pages: https://github.com/de-bao/de-bao.github.io

set -e

echo "=========================================="
echo "🚀 开始部署到 GitHub Pages"
echo "=========================================="
echo ""

# 检查是否在 git 仓库中
if [ ! -d .git ]; then
    echo "❌ 错误: 当前目录不是 git 仓库"
    echo "请先初始化 git 仓库或切换到正确的目录"
    exit 1
fi

# 检查远程仓库
if ! git remote | grep -q origin; then
    echo "⚠️  警告: 未找到 origin 远程仓库"
    echo "正在添加远程仓库..."
    git remote add origin https://github.com/de-bao/de-bao.github.io.git
fi

# 显示当前状态
echo "📊 当前 Git 状态:"
git status -s
echo ""

# 添加所有更改
echo "📝 添加文件到 git..."
git add .

# 检查是否有更改
if git diff --staged --quiet; then
    echo "ℹ️  没有需要提交的更改"
    echo "💡 提示: 所有文件已是最新状态"
else
    # 提交更改
    echo "💾 提交更改..."
    if [ -z "$1" ]; then
        read -p "请输入提交信息 (默认: 更新博客): " commit_msg
        commit_msg=${commit_msg:-"更新博客"}
    else
        commit_msg="$1"
    fi
    git commit -m "$commit_msg"
    echo "✅ 已提交: $commit_msg"
fi

# 推送到远程仓库
echo ""
echo "📤 推送到 GitHub..."
git push origin main

echo ""
echo "=========================================="
echo "✅ 部署完成！"
echo "=========================================="
echo ""
echo "🌐 网站地址: https://de-bao.github.io"
echo "📦 仓库地址: https://github.com/de-bao/de-bao.github.io"
echo ""
echo "💡 提示:"
echo "   - GitHub Pages 通常需要 1-5 分钟来更新"
echo "   - 如果网站没有更新，请清除浏览器缓存"
echo "   - 可以访问 GitHub 仓库查看部署状态"
echo ""

