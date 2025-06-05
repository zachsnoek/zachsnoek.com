import fs from 'fs';
import path from 'path';
import { PostMetadata, schPostMetadata } from '../schemas/schPostMetadata';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function getAllPostIds() {
    const directories = fs.readdirSync(postsDirectory);

    return directories.map((directory) => ({
        id: directory,
    }));
}

export async function getAllTags() {
    const posts = await getAllPosts();
    return posts.flatMap((post) => post.tags).map((tag) => ({ tag }));
}

type GetAllPostsOptions = {
    filter?: {
        tag?: string;
    };
    limit?: number;
};

export async function getAllPosts(
    queryOptions: GetAllPostsOptions = {}
): Promise<PostMetadata[]> {
    const options = { limit: 100, ...queryOptions };
    const postDirectories = fs.readdirSync(postsDirectory);

    const { filter, limit } = options;

    const posts = await Promise.all(
        postDirectories.map(async (directory) => {
            const { default: Content, ...rest } = await import(
                `../content/blog/${directory}/index.mdx`
            );

            const post = schPostMetadata.parse({ id: directory, ...rest });
            if (filter?.tag && !post.tags.includes(filter?.tag)) {
                return;
            }

            return post;
        })
    );

    const sortedPosts = posts
        .filter((post): post is PostMetadata => post !== undefined)
        .sort(({ date: a }, { date: b }) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            }
            return 0;
        });

    return sortedPosts.slice(0, limit);
}
