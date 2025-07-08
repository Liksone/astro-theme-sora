import { visit } from "unist-util-visit";
import type { Element, Root } from "hast";

// interface Options {
//   domain: string;
// }

// export function rehypeExternalLinks(options?: Options) {

export default function rehypeExternalLinks() {
  return (tree: Root) => {
    // tree 是 HTML 语法树 hast
    visit(tree, "element", (node: Element) => {
      // visit 遍历语法树，node.type 为 "element"

      // 判断站外链接
      if (!(node.tagName == "a" && node.properties.href.startsWith("http"))) {
        return;
      }
      // 去除站内链接？
      // const links = document.querySelectorAll(
      //   `#post-content a[href^="https://"]:not([href*="${window.location.hostname}"])`,
      // );

      // 添加 rel 和 target
      node.properties.rel = "noopener";
      node.properties.target = "_blank";

      // 添加链接图标
      const faviconMap = {
        "github.com": "github.svg",
        "halo.run": "halo.webp",
        "ld246.com": "ld246.png",
        "www.cnblogs.com": "cnblogs.ico",
        "zhihu.com": "zhihu.ico",
        "post.smzdm.com": "smzdm.ico",
        "www.reddit.com": "reddit.png",
        "www.v2ex.com": "v2ex.jpeg",
        "bilibili.com": "bilibili.ico",
      };
      const url = new URL(node.properties.href);
      let favicon: string;
      for (const [key, value] of Object.entries(faviconMap)) {
        if (url.hostname.includes(key)) {
          favicon = `/images/favicons/${value}`;
          break;
        }
      }

      const faviconElement: Element = {
        type: "element",
        tagName: "span",
        properties: {
          class: "inline-block w-4 h-4 mr-1",
        },
        children: [],
      };
      if (favicon) {
        faviconElement.properties.class += ` bg-contain align-[-0.1rem]`;
        faviconElement.properties.style = `background-image: url(${favicon})`;
      } else {
        faviconElement.properties.class +=
          " icon-[pajamas--external-link] iconify-inline text-neutral";
      }

      node.children.unshift(faviconElement);
    });
  };
}
