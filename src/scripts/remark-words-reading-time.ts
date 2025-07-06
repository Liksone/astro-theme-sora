import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export default function remarkWordsAndReadingTime() {
  return function (tree, { data }) {
    const text = toString(tree);
    const post = getReadingTime(text);

    // 字数统计
    const words = post.words;
    // data.astro.frontmatter.words = text.length;  // 字数统计会比上者多
    data.astro.frontmatter.words =
      words < 1000 ? words : `${Math.round(words / 100) / 10}k`;

    // 预计阅读时间
    data.astro.frontmatter.readingTime = `${Math.ceil(post.words / 300)} min`;
    // const min = Math.ceil(post.words / 350);
    // const max = Math.ceil(post.words / 250);
    // if (min == max) {
    //   data.astro.frontmatter.readingTime = `${max} min`;
    // } else {
    //   data.astro.frontmatter.readingTime = `${min}~${max} min`;
    // }
  };
}
