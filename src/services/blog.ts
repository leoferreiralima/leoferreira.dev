import { getCollection, type CollectionEntry } from "astro:content";
import { sortItemsByDateDesc } from "../utils/data-utils";
import { slugify } from "../utils/common-utils";

export type PostTag = ReturnType<typeof getAllTags>[number]
export type Post = CollectionEntry<'blog'>

export async function getAllPosts() {
    const posts = (await getCollection('blog')).sort(sortItemsByDateDesc);
    return posts.filter(({ data }) => data.isFeatured);
}

export function getAllTags(posts: Post[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            const slug = slugify(tag);
            return {
                name: tag,
                slug: slugify(tag),
                posts: getPostsByTag(posts, slug)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
        }).sort((tagA, tagB) => {
            const postCountTagA = tagA.posts.length;
            const postCountTagB = tagB.posts.length;
            return postCountTagB - postCountTagA;
        });
}

export function getPostsByTag(posts: Post[], tagSlug: string) {
    return posts.filter(
        (post) =>
            (post.data.tags || [])
                .map((tag) => slugify(tag))
                .includes(tagSlug)
    );
}