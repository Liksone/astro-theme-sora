import { getCollection, type CollectionKey } from "astro:content";
import dayjs from "dayjs";

export async function getSortedCollection(
  name: CollectionKey,
  byUpdateDate: boolean = true,
) {
  const collection = await getCollection(name);

  const sortedCollection = collection.sort((a, b) => {
    const dateA =
      byUpdateDate && a.data.updateDate !== undefined
        ? dayjs(a.data.updateDate)
        : dayjs(a.data.publishDate);
    const dateB =
      byUpdateDate && b.data.updateDate !== undefined
        ? dayjs(b.data.updateDate)
        : dayjs(b.data.publishDate);

    return dateA.isBefore(dateB) ? 1 : -1;
  });

  return sortedCollection;
}
