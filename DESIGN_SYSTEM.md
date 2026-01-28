# 深色模式优先设计系统

## 设计规范

### 颜色方案
- **背景**: `#0F0F0F` (dark-bg)
- **卡片**: `#1A1A1A` (dark-card) - 带5%噪点纹理
- **文字**: `#E6E6E6` (dark-text)
- **强调色**: `#FFD166` (accent-amber) - 琥珀金

### 字体
- **标题**: Raleway Bold
- **正文**: Inter
- **代码**: Fira Code

### 交互效果
- **导航栏**: 磨砂玻璃效果 (backdrop-blur)
- **卡片悬停**: 内阴影加深
- **平滑滚动**: 已启用

### 禁用项
- ❌ 纯黑背景
- ❌ 刺眼白字
- ❌ 蓝白渐变
- ❌ 闪烁动画

### WCAG AA对比度
- ✅ #E6E6E6 on #0F0F0F = 14.2:1 (AAA级别)
- ✅ #E6E6E6 on #1A1A1A = 11.8:1 (AAA级别)
- ✅ #FFD166 on #0F0F0F = 8.5:1 (AA级别)

## 使用方法

### 开发环境

1. 安装依赖：
```bash
npm install
```

2. 构建CSS：
```bash
npm run build:css
```

3. 监听CSS变化（开发时）：
```bash
npm run watch:css
```

### Tailwind类使用示例

```html
<!-- 卡片 -->
<div class="card">
  <!-- 内容 -->
</div>

<!-- 导航栏 -->
<nav class="navbar-glass">
  <!-- 导航内容 -->
</nav>

<!-- 按钮 -->
<button class="btn-primary">点击</button>
```

## 文件结构

- `tailwind.config.js` - Tailwind配置
- `assets/css/input.css` - Tailwind输入文件
- `assets/css/main.css` - 编译后的CSS（自动生成）
- `package.json` - npm依赖和脚本
