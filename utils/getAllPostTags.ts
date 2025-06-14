import { getAllPosts } from './getAllPosts';

export async function getAllPostTags() {
    const posts = await getAllPosts();
    return posts.flatMap((post) => post.tags).map((tag) => ({ tag }));
}
