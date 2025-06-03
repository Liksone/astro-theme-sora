import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export default function remarkWordsAndReadingTime() {
  return function (tree, { data }) {
    const text = toString(tree);
    const post = getReadingTime(text);

    // 字数统计
    data.astro.frontmatter.words = post.words;
    // data.astro.frontmatter.words = text.length;  // 字数统计会比上者多

    // 预计阅读时间
    // data.astro.frontmatter.readingTime = post.minutes;
    const min = Math.ceil(post.words / 350);
    const max = Math.ceil(post.words / 250);
    if (min == max) {
      data.astro.frontmatter.readingTime = `${max} min`;
    } else {
      data.astro.frontmatter.readingTime = `${min}~${max} min`;
    }
  };
}
