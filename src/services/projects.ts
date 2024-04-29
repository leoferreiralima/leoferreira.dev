import { getCollection } from "astro:content";
import { sortItemsByDateDesc } from "../utils/data-utils";

export async function getAllProjects() {
    const posts = (await getCollection('projects')).sort(sortItemsByDateDesc);
    return posts.filter(({ data }) => data.isFeatured);
}