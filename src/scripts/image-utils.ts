import type { ImageMetadata } from "astro";
import path from "path";
// const images = import.meta.glob<{ default: ImageMetadata }>("@images/**");
const images = import.meta.glob<{ default: ImageMetadata }>(
  "src/config/images/**",
);

export function getImportImage(imagePath: string) {
  const image = path.join("/src/config/images/", imagePath);
  return images[image]();
}
