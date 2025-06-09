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

## 站点 信息 `site`

|             | 说明                       | 节横扫                                                     | 示例                      |
| ----------- | -------------------------- | ---------------------------------------------------------- | ------------------------- |
| url         | 站点地址                   |                                                            | "https://blog.liks.space" |
| title       | 站点标题                   | "Liks' Blog"                                               |
| author      | 站长名 <br> 用于 meta 信息 | "Liks"                                                     |
| description | 站点简介                   | "Liks 的博客"                                              |
| favicon     | 站点图标                   | "/icon/favicon.svg" <br> "https://example.com/favicon.svg" |

## 全局设置

```typescript
global: {
  avatar: "avatar.jpg",
  rss: true,
  i18n: true,
}
```

|        | 说明            | 示例                                                                                       |
| ------ | --------------- | ------------------------------------------------------------------------------------------ |
| avatar | 头像            | <ul><li>本地文件 "avatar.jpg"</li><li>网页链接 "https://example.com/favicon.svg"</li></ul> |
| rss    | 启用 RSS        | true                                                                                       |
| i18n   | 启用 多语言支持 | true                                                                                       |
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

