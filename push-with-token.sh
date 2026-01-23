#!/bin/bash

# 使用 Token 推送脚本
# 这个方法会直接使用 Token，避免交互式输入

set -e

echo "=========================================="
echo "🚀 使用 Token 推送到 GitHub"
echo "=========================================="
echo ""

# 检查是否在 git 仓库中
if [ ! -d .git ]; then
    echo "❌ 错误: 当前目录不是 git 仓库"
    exit 1
fi

# 从文件中读取 Token（如果存在）
TOKEN_FILE="$HOME/.github_token"
if [ -f "$TOKEN_FILE" ]; then
    GITHUB_TOKEN=$(cat "$TOKEN_FILE")
    echo "✅ 从文件读取 Token"
else
    # 如果没有配置文件，使用用户提供的 Token
    # 请将你的 Token 保存到 ~/.github_token 文件中
    echo "📝 请将你的 GitHub Personal Access Token 保存到: ~/.github_token"
    echo "   或者直接在这个脚本中修改 TOKEN 变量"
    echo ""
    read -p "请输入你的 GitHub Token: " GITHUB_TOKEN
    
    # 询问是否保存
    read -p "是否保存 Token 到文件以便下次使用? (y/n): " save_token
    if [ "$save_token" = "y" ] || [ "$save_token" = "Y" ]; then
        echo "$GITHUB_TOKEN" > "$TOKEN_FILE"
        chmod 600 "$TOKEN_FILE"
        echo "✅ Token 已保存到 $TOKEN_FILE"
    fi
fi

# 获取远程仓库 URL
REMOTE_URL=$(git config --get remote.origin.url)

# 如果是 HTTPS URL，插入 Token
if [[ "$REMOTE_URL" == https://* ]]; then
    # 提取用户名和仓库路径
    USERNAME="de-bao"
    REPO_PATH=$(echo "$REMOTE_URL" | sed 's|https://github.com/||' | sed 's|\.git$||')
    
    # 构建带 Token 的 URL
    TOKEN_URL="https://${GITHUB_TOKEN}@github.com/${REPO_PATH}.git"
    
    # 临时设置远程 URL
    git remote set-url origin "$TOKEN_URL"
    
    echo "📤 正在推送..."
    git push origin main
    
    # 恢复原始 URL（移除 Token）
    git remote set-url origin "$REMOTE_URL"
    
    echo ""
    echo "=========================================="
    echo "✅ 推送完成！"
    echo "=========================================="
    echo ""
    echo "🌐 网站地址: https://de-bao.github.io"
    echo "📦 仓库地址: https://github.com/de-bao/de-bao.github.io"
    echo ""
else
    echo "❌ 错误: 远程仓库 URL 不是 HTTPS 格式"
    echo "当前 URL: $REMOTE_URL"
    exit 1
fi

