import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import dayjs from "dayjs";

const blog = defineCollection({
  // loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "src/content" }),
  loader: glob({
    pattern: ["*.md", "*/*.md"],
    base: "src/content",
  }),
  // 常见类型见 https://docs.astro.build/zh-cn/guides/content-collections/#%E5%AE%9A%E4%B9%89%E9%9B%86%E5%90%88%E6%A8%A1%E5%BC%8Fschema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // author: z.string(),
      description: z.string().optional(),
      cover: image().optional(),
      publishDate: z
        .date()
        .transform((date) => dayjs(date).format("YYYY-MM-DD")),
      updateDate: z
        .date()
        .transform((date) => dayjs(date).format("YYYY-MM-DD"))
        .optional(),
      categories: z
        .array(z.string())
        .refine((items) => new Set(items).size === items.length, {
          message: "categories must be unique",
        })
        .optional(),
      tags: z.array(z.string()).optional(),
      // slug: z.string().optional(),
      // draft: z.boolean().optional().default(false),
    }),
});

export const collections = { blog };
