<div align="center">
<p>
<img src="./docs/logo.svg" alt="logo" height="46" />
</p>
<p>A blog theme built with Astro</p>
<p>Like this theme? Don't forget to give it a 🌟Star!</p>
<p><strong>English</strong> | <a href="/README.zh.md">简体中文</a></p>
</div>

# Preview

[My Blog](https://blog.liks.space)

## Who is using

Welcome to open an [Issue](https://github.com/Liksone/astro-theme-sora/issues/new?template=addWebsite.yml) to show your website.

# Getting Started

1. Install the theme

   - Install [pnpm](https://pnpm.io/installation)
   - ```bash
     pnpm create astro@latest --template Liksone/astro-theme-sora
     ```
   - Enter the project directory and run `pnpm run init` to initialize the project

2. Configure the theme

   Edit the configuration file `src/config/theme.yaml` to customize the theme. See [Configuration](#Configuration) for details.

3. Edit posts

   Edit in the `src/content/` directory. Markdown format is supported.

4. Deploy the website

   Run `pnpm build` to build the website. The output will be in the `dist/` directory. You can run `pnpm preview` to preview the website locally.

   Deploy the website to your server, or refer to the [Astro documentation](https://docs.astro.build/en/guides/deploy/) to deploy it to Vercel, Netlify, GitHub Pages, or other platforms.

# Configuration

The configuration file is `src/config/theme.yaml`.

## Site Information

```yaml
site:
  # website address
  url: "https://example.com"
  # website title
  title: "Sora"
  # author name
  author: "Liks"
  # website description
  description: "A blog theme built with Astro"
  # website favicon
  # supports SVG, PNG, ICO formats
  # local file path located in the public/favicon/ directory
  favicon: "favicon.ico"
```

## Global Settings

```yaml
global:
  # avatar
  # local file path located in the src/config/images/ directory
  avatar: "avatar.jpg"
  # enable RSS
  rss: true
  # enable i18n support (still in development)
  i18n: false
```

## Navigation Bar

```yaml
nav:
  - # page name
    name: "Archives"
    # page address
    url: "/archives"
  - name: "Categories"
    url: "/categories"
  - name: "Tags"
    url: "/tags"
  - name: "About"
    url: "/about"
  ...
```

## Footer

```yaml
footer:
  # copyright
  copyright:
    # copyright owner
    owner: "Liks"
    # site establishment time
    time: "2024 - 2025"
  # filing (China-specific)
  beian:
    # ICP filing
    icp:
      # enable
      enabled: false
      # filing number
      number: "京 ICP 备 12345678 号"
    # police filing
    police:
      # enable
      enabled: false
      # filing number
      number: "京公网安备 12345678901234 号"
      # filing URL
      url: "https://beian.mps.gov.cn/webcode=?"
```

## Index

```yaml
index:
  # social media
  social:
    - # name
      name: "GitHub"
      # enable
      enabled: true
      # URL
      url: "https://github.com/Liksone"
    ...
```

Supports BiliBili, Email, Facebook, GitHub, Instagram, QQ, Telegram, Twitter/X, YouTube, Weibo, Xiaohongshu, and Zhihu.

## Post

```yaml
post:
  # copyright license
  copyright:
    # CC license
    CCLicense:
      BY: true
      NC: true
      SA: true
      ND: false
    # license URL
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0"
```

## Sponsorship

```yaml
sponsor:
  # enable
  enabled: true
  # Alipay QR code
  alipay:
    # enable
    enabled: true
    # local file path located in the src/config/images/ directory
    image: "alipay.png"
  # WeChat QR code
  wechat:
    enabled: false
  # display sponsor list
  list: true
```

## Comment

```yaml
comment:
  # enable
  enabled: false
  # Artalk - https://artalk.js.org
  artalk:
    enabled: false
    # backend server address
    server: "https://artalk.example.com"
    # site name
    site: "Sora"
```

## Tools

```yaml
tools:
  # Umami - https://umami.is
  umami:
    # enable
    enabled: false
    # server address
    src: "https://cloud.umami.is"
    # data-website-id
    websiteID: "c26d92e7-d859-43be-991c-5a5dd0503eb9"
```

# Update

```bash
git remote add upstream https://github.com/Liksone/astro-theme-sora.git
git fetch upstream
git merge upstream/main --squash --allow-unrelated-histories
```

Suitable for users familiar with Git, sometimes manual conflict resolution is required.

(For normal users, considering how to separate the theme from user files, such as the organization of other static site generators like Hugo, to avoid relying on Git.)

# License

[GNU General Public License v3.0](https://github.com/Liksone/astro-theme-sora/blob/main/LICENSE)

# Acknowledgments

- [Pedro-null/halo-theme-hingle2.0](https://github.com/Pedro-null/halo-theme-hingle2.0)
- [Aziteee/halo-theme-lapis](https://github.com/Aziteee/halo-theme-lapis)
- [Zhilu's Blog](https://blog.zhilu.cyou/)
- [HowieHz/halo-theme-higan-hz](https://github.com/HowieHz/halo-theme-higan-hz)
- [saicaca/fuwari](https://github.com/saicaca/fuwari)
- [radishzzz/astro-theme-retypeset](https://github.com/radishzzz/astro-theme-retypeset)
- [EveSunMaple/Frosti](https://github.com/EveSunMaple/Frosti)
- [Renovamen/renovamen.github.io](https://github.com/Renovamen/renovamen.github.io)
