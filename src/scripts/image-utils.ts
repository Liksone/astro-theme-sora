import type { ImageMetadata } from "astro";
import path from "path";
const images = import.meta.glob<{ default: ImageMetadata }>("@images/**");

export function getImportImage(imagePath: string) {
  const image = path.join("/src/images", imagePath);
  return images[image]();
}
