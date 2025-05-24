export function getCategoryUrl(category: string): string {
  // const trimmedCategory = category.trim();
  return `/categories/${category}`;
}

export function getTagUrl(tag: string): string {
  return `/tags/${tag}`;
}
