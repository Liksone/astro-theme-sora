import type { ImageMetadata } from "astro";
import path from "path";
const images = import.meta.glob<{ default: ImageMetadata }>("@images/*");

export async function getImportImage(imageName: string) {
  const imagePath = path.join("/src/images", imageName);
  return images[imagePath]();
}
