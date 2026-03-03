# 香水测试问卷部署指南

## 方案1：Vercel 部署（推荐）

### 步骤：
1. 访问 https://vercel.com 并用 GitHub 账号登录
2. 点击 "Add New" → "Project"
3. 导入这个项目文件夹（或先上传到 GitHub）
4. 点击 "Deploy"
5. 几秒钟后就会得到一个可分享的链接，例如：`https://your-project.vercel.app`

### 优点：
- 完全免费
- 自动 HTTPS
- 全球 CDN 加速
- 每次更新代码自动重新部署

---

## 方案2：Netlify 部署

### 步骤：
1. 访问 https://www.netlify.com 并注册
2. 拖拽整个 `perfume-quiz` 文件夹到 Netlify 页面
3. 自动部署完成，获得链接

### 优点：
- 完全免费
- 操作最简单（拖拽即可）
- 自动 HTTPS

---

## 方案3：GitHub Pages

### 步骤：
1. 在 GitHub 创建新仓库
2. 上传 `perfume-quiz` 文件夹内容
3. 在仓库设置中启用 GitHub Pages
4. 访问 `https://你的用户名.github.io/仓库名`

### 优点：
- 完全免费
- 与 GitHub 集成

---

## 本地测试

当前已在 http://localhost:8888 运行
要分享给局域网内的人测试，可以：
1. 查看你的本地 IP：在终端运行 `ifconfig | grep "inet "`
2. 分享链接：`http://你的IP:8888`（仅限同一 WiFi 网络）

---

## 推荐方案

**最简单**：Netlify（拖拽上传）
**最专业**：Vercel（适合后续维护更新）
