<div align="center">
<p>
<img src="./docs/logo.svg" alt="logo" height="46" />
</p>
<p>一款 Astro 博客主题</p>
<p>Sora 意为「穹」，象征着无限的可能性和广阔的创造力</p>
<p>喜欢这个主题，不妨点个 🌟Star！</p>
<p><strong>简体中文</strong> | <a href="/README.md">English</a></p>
</div>

# 预览

[My Blog](https://blog.liks.space)

## 谁在使用

欢迎提一个 [Issue](https://github.com/Liksone/astro-theme-sora/issues/new?template=addWebsite.yml) 来展示自己的网站。

# 开始

1. 安装主题

   - 安装 [pnpm](https://pnpm.io/installation)
   - ```bash
     pnpm create astro@latest --template Liksone/astro-theme-sora
     ```

   - 进入项目目录，运行 `pnpm run init` 初始化主题

2. 配置主题

   修改配置文件 `src/config/theme.yaml` 来自定义主题，详见[配置](#配置)。

3. 编辑文章

   在 `src/content/` 目录中编辑，支持 Markdown 格式。

4. 部署网站

   运行 `pnpm build` 构建网站，构建产物在 `dist/` 目录。可运行 `pnpm preview` 在本地预览网站。

   自行部署网站至服务器，或者参考 [Astro 文档](https://docs.astro.build/en/guides/deploy/)部署网站至 Vercel、Netlify、GitHub Pages 等托管平台。

<!-- # 文档 -->

# 配置

配置文件为 `src/config/theme.yaml`。

## 站点信息

```yaml
site:
  # 网站地址
  url: "https://example.com"
  # 网站标题
  title: "Sora"
  # 站长名
  author: "Liks"
  # 网站简介
  description: "A blog theme built with Astro"
  # 网站图标
  # 支持 SVG、PNG、ICO 格式
  # 位于 public/favicon/ 目录内的本地文件路径
  favicon: "favicon.ico"
```

## 全局设置

```yaml
global:
  # 头像
  # 位于 src/config/images/ 目录内的本地文件路径
  avatar: "avatar.jpg"
  # 启用 RSS
  rss: true
  # 启用多语言支持（开发中）
  i18n: false
```

## 导航栏

```yaml
nav:
  - # 页面名
    name: "归档"
    # 页面地址
    url: "/archives"
  - name: "分类"
    url: "/categories"
  - name: "标签"
    url: "/tags"
  - name: "关于"
    url: "/about"
  ...
```

## 页脚

```yaml
footer:
  # 版权
  copyright:
    # 版权所有者
    owner: "Liks"
    # 建站时间
    time: "2024 - 2025"
  # 备案（中国特供）
  beian:
    # ICP 备案
    icp:
      # 启用
      enabled: false
      # 备案号
      number: "京 ICP 备 12345678 号"
    # 公安备案
    police:
      # 启用
      enabled: false
      # 备案号
      number: "京公网安备 12345678901234 号"
      # 备案网址
      url: "https://beian.mps.gov.cn/webcode=?"
```

## 首页

```yaml
index:
  # 社交媒体
  social:
    - # 名称
      name: "GitHub"
      # 启用
      enabled: true
      # 网址
      url: "https://github.com/Liksone"
    ...
```

支持 BiliBili、Email、Facebook、GitHub、Instagram、QQ、Telegram、Twitter/X、YouTube、微博、小红书、知乎。

## 文章页

```yaml
post:
  # 版权许可
  copyright:
    # CC 许可
    CCLicense:
      BY: true
      NC: true
      SA: true
      ND: false
    # 许可网址
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0"
```

## 赞助

```yaml
sponsor:
  # 启用
  enabled: true
  # 支付宝二维码
  alipay:
    # 启用
    enabled: true
    # 位于 src/config/images/ 目录内的本地文件路径
    image: "alipay.png"
  # 微信二维码
  wechat:
    enabled: false
  # 显示赞助名单
  list: true
```

## 评论

```yaml
comment:
  # 启用
  enabled: false
  # Artalk - https://artalk.js.org
  artalk:
    enabled: false
    # 后端服务器地址
    server: "https://artalk.example.com"
    # 站点名
    site: "Sora"
```

## 工具

```yaml
tools:
  # Umami - https://umami.is
  umami:
    # 启用
    enabled: false
    # 服务器地址
    src: "https://cloud.umami.is"
    # data-website-id
    websiteID: "c26d92e7-d859-43be-991c-5a5dd0503eb9"
```

# 更新

```bash
git remote add upstream https://github.com/Liksone/astro-theme-sora.git
git fetch upstream
git merge upstream/main --squash --allow-unrelated-histories
```

适合熟悉 Git 的用户，有时需要手动解决文件冲突。

（对于普通用户，在思考如何将主题与用户文件进行分离，比如其他静态站点生成器如 Hugo 的组织方式，从而不依赖于 Git。）

# 许可

[GNU General Public License v3.0](https://github.com/Liksone/astro-theme-sora/blob/main/LICENSE)

# 致谢

- [Pedro-null/halo-theme-hingle2.0](https://github.com/Pedro-null/halo-theme-hingle2.0)
- [Aziteee/halo-theme-lapis](https://github.com/Aziteee/halo-theme-lapis)
- [纸鹿摸鱼处](https://blog.zhilu.cyou/)
- [HowieHz/halo-theme-higan-hz](https://github.com/HowieHz/halo-theme-higan-hz)
- [saicaca/fuwari](https://github.com/saicaca/fuwari)
- [radishzzz/astro-theme-retypeset](https://github.com/radishzzz/astro-theme-retypeset)
- [EveSunMaple/Frosti](https://github.com/EveSunMaple/Frosti)
- [Renovamen/renovamen.github.io](https://github.com/Renovamen/renovamen.github.io)
