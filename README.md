## 小李万事屋 · 静态网站

这是为“小李万事屋（Xiao Li Yorozuya）”制作的静态企业展示网站，可直接部署到 **Cloudflare Pages** 使用。

站点为纯静态，无后端，仅包含：

- `index.html`：首页
- `services.html`：服务项目
- `about.html`：关于工作室与店主
- `faq-pricing.html`：价格与常见问题
- `contact.html`：联系与预约
- `assets/css/styles.css`：样式
- `assets/js/main.js`：基础交互
- `assets/img/favicon.svg`：站点图标

### 功能说明

- 响应式布局，适配桌面与移动端
- 完整导航与页脚，包含工作室介绍、位置、支付方式与免责声明
- 服务列表覆盖占卜命理、语言辅导、维修跑腿、海外代购、基础法律常识咨询等多个方向
- `contact.html` 中提供预约意向表单，前端会做必填项校验，**不发送到服务器**，适合作为“填写后复制通过微信/邮箱发送”的辅助工具
- 支持的支付方式（说明性文案）：VISA、PayPal、银联、支付宝、微信等

### 本地预览

在本地项目目录下启动一个静态文件服务器（任选其一）：

```bash
# Python 3
python -m http.server 4173

# 或者使用 Node（需要预先全局安装 serve）
npx serve .
```

然后在浏览器访问：

```text
http://localhost:4173
```

### 部署到 Cloudflare Pages

1. 将本仓库推送到你的 Git 平台（GitHub / GitLab 等）
2. 在 Cloudflare Pages 控制台中创建新项目，绑定对应仓库
3. 构建设置：
   - **Build command**：留空（或 `npm run build` 之类都可以不填）
   - **Build output directory**：根目录（即 `/`）
4. 保存并部署，几分钟后即可访问你分配到的域名

> 由于本项目完全静态，如需在线表单提交、聊天窗口或其他动态功能，可后续在 Cloudflare Pages 上接入 Workers / Functions 或第三方表单服务。

