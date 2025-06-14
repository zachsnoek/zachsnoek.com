import fs from 'fs';
import path from 'path';
import { Post } from '../types';
import { getPostMetadata } from './getPostMetadata';

type GetAllPostsOptions = {
    filter?: {
        tag?: string;
    };
    limit?: number;
};

export async function getAllPosts(
    queryOptions: GetAllPostsOptions = {}
): Promise<Post[]> {
    const options = { limit: 100, ...queryOptions };
    const postDirectories = fs.readdirSync(
        path.join(process.cwd(), 'content', 'blog')
    );

    const { filter, limit } = options;

    const posts = await Promise.all(
        postDirectories.map(async (directory) => {
            const metadata = await getPostMetadata(directory);
            if (filter?.tag && !metadata.tags.includes(filter?.tag)) {
                return;
            }
            const post: Post = { id: directory, ...metadata };
            return post;
        })
    );

    const sortedPosts = posts
        .filter((post): post is Post => post !== undefined)
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
