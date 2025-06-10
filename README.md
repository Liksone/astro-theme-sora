<div align="center">
<p>
<img src="./docs/logo.svg" alt="logo" height="46" />
</p>
<p>一款 Astro 博客主题</p>
<p>Sora 意为「穹」，象征着无限的可能性和广阔的创造力</p>
<p>喜欢这个主题，不妨点个 🌟Star！</p>
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

   - 进入项目目录，运行 `pnpm dev` 启动项目

2. 配置主题

   修改配置文件 `theme.config.ts` 来自定义主题。

3. 编辑文章

   在 `src/content/` 目录中编辑，支持 Markdown 格式。

4. 部署网站

   运行 `pnpm build` 构建网站，构建产物在 `dist/` 目录。可运行 `pnpm preview` 在本地预览网站。

   自行部署网站至服务器，或者参考 [Astro 文档](https://docs.astro.build/en/guides/deploy/)部署网站至 Vercel、Netlify、GitHub Pages 等托管平台。

# 文档

# 配置

## 站点信息

```typescript
site: {
  url: "https://blog.liks.space",
  title: "Sora",
  author: "Liks",
  description: "A blog theme built with Astro",
  favicon: "/favicon/favicon-32x32.png",
}
```

|             | 说明                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| url         | 站点网址                                                                                                                  |
| title       | 站点标题                                                                                                                  |
| author      | 站长名                                                                                                                    |
| description | 站点简介                                                                                                                  |
| favicon     | 站点图标 <br> 支持 SVG、PNG、ICO 格式 <br> 相对 `public/` 目录的本地文件路径，或者网址 `"https://example.com/favicon.svg` |

## 基本 全局设置

```typescript
global: {
  avatar: "avatar.jpg",
  rss: true,
  i18n: true,
}
```

|        | 说明           | 示例                                                                                       |
| ------ | :------------- | :----------------------------------------------------------------------------------------- |
| avatar | 头像           | <ul><li>本地文件 "avatar.jpg"</li><li>网页链接 "https://example.com/favicon.svg"</li></ul> |
| rss    | 启用 RSS       | true                                                                                       |
| i18n   | 启用多语言支持 | true                                                                                       |

## 导航栏

```js
nav: [
  {
    name: "归档",
    url: "/archives",
  },
  {
    name: "分类",
    url: "/categories",
  },
  {
    name: "标签",
    url: "/tags",
  },
  {
    name: "关于",
    url: "/about",
  },
];
```

|      | 说明     |
| ---- | -------- |
| name | 页面名称 |
| url  | 网址     |

## 页脚

|            | 说明             |
| ---------- | ---------------- |
| copyright  | 版权             |
| time       | 建站时间         |
| owner      | 版权所有者       |
| beian      | 备案（中国特供） |
| icp        | ICP 备案号       |
| police     | 公安备案号       |
| policeLink | 公安备案链接     |

## 首页

| social | 社交媒体|

## 文章页

```typescript
post: {
  copyright: {
    CCLicense: {
      BY: true,
      NC: true,
      SA: true,
      ND: false,
    },
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans",
  },
}
```

<table>
    <tr>
    <th></th>
    <th>说明</th>
    <th></th>
    <th>说明</th>
    </tr>
    <tr>
    <td rowspan="2">copyright</td>
    <td rowspan="2">版权许可</td>
    <td>CCLicense</td>
    <td>CC 许可</td>
    </tr>
    <tr>
    <td>url</td>
    <td>许可网址</td>
    </tr>
</table>

## 赞助

```typescript
sponsor: {
  enable: true,
  alipay: {
    enable: false,
    image: "",
  },
  wechat: {
    enable: true,
    image: "wechatpay.png",
  },
  list: true,
}
```

|        |        | 说明                                                      |
| ------ | ------ | --------------------------------------------------------- |
| enable |        | 启用赞助                                                  |
| alipay |        | 支付宝二维码                                              |
|        | enable |                                                           |
|        | image  | 本地文件或网页链接 Relative to the /src/images/ directory |
| wechat |        | 微信二维码                                                |
|        | enable |                                                           |
|        | image  | 本地文件或网页链接 Relative to the /src/images/ directory |
| list   |        | 显示赞助名单                                              |

## 工具

```typescript
tools: {
  // [Umami](https://umami.is)
  umami: {
    // 启用
    enable: false,
    // 服务器地址
    src: "https://cloud.umami.is",
    // data-website-id
    websiteID: "c26d92e7-d859-43be-991c-5a5dd0503eb9",
  },
}
```


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

