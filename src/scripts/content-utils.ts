import { getCollection, type CollectionKey } from "astro:content";
import dayjs from "dayjs";

export async function getSortedCollection(name: CollectionKey) {
  const collection = await getCollection(name);

  const sortedCollection = collection.sort((a, b) => {
    const dateA = dayjs(a.data.publishDate);
    const dateB = dayjs(b.data.publishDate);
    return dateA.isBefore(dateB) ? 1 : -1;
  });

  return sortedCollection;
}
