import { getCollection, type CollectionEntry } from "astro:content";
import { sortItemsByDateDesc } from "../utils/data-utils";
import { slugify } from "../utils/common-utils";

export async function getAllPosts() {
    const posts = (await getCollection('blog')).sort(sortItemsByDateDesc);
    return posts.filter(({ data }) => data.isFeatured);
}

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                slug: slugify(tag)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
        });
}

export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagSlug: string) {
    const filteredPosts: CollectionEntry<'blog'>[] = posts.filter((post) => (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug));
    return filteredPosts;
}