import type { CollectionEntry, CollectionKey } from "astro:content";
import { fromHtml } from "hast-util-from-html";
import { toText } from "hast-util-to-text";

export function generateDescription(
  post: CollectionEntry<CollectionKey>,
  length: number,
): string {
  if (post.data.description) return post.data.description;

  const html = post.rendered?.html as string;
  const tree = fromHtml(html, { fragment: true });
  const body = toText(tree);
  let description = body.replace(/[\n\t]+/g, " ");
  if (description.length > length) {
    description = description.substring(0, length) + "...";
  }
  return description;
}
