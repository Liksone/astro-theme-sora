import rss from "@astrojs/rss";
import { themeConfig } from "@config";
import { getSortedCollection } from "@scripts/content-utils";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getSortedCollection("blog");
  return rss({
    title: themeConfig.site.title,
    description: "My journey learning Astro",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
