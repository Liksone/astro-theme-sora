import { defineConfig } from "astro/config";
import { themeConfig } from "./src/theme.config.ts";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkWordsAndReadingTime from "./src/scripts/remark-words-reading-time.ts";
import rehypeExternalLinks from "./src/scripts/rehype-external-links.ts";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: themeConfig.site.url,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), sitemap()],

  markdown: {
    remarkPlugins: [remarkWordsAndReadingTime],
    rehypePlugins: [rehypeExternalLinks],
    shikiConfig: {
      // theme: "catppuccin-latte",
      theme: "one-light",
    },
  },
});