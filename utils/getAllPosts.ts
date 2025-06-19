import fs from 'fs';
import path from 'path';
import { Post } from '../types';
import { getPostMetadata } from './getPostMetadata';

type Options = {
    filter?: {
        tag?: string;
    };
    limit?: number;
};

export async function getAllPosts(options: Options = {}): Promise<Post[]> {
    const postDirectories = fs.readdirSync(
        path.join(process.cwd(), 'content', 'blog')
    );

    const { filter, limit } = options;

    const posts: Post[] = await Promise.all(
        postDirectories.map(async (directory) => {
            const metadata = await getPostMetadata(directory);
            const post: Post = { id: directory, ...metadata };
            return post;
        })
    );

    const tag = filter?.tag?.length ? filter.tag : null;
    const filteredPosts =
        tag !== null ? posts.filter((post) => post.tags.includes(tag)) : posts;

    const sortedPosts = filteredPosts.sort(({ date: a }, { date: b }) =>
        b.localeCompare(a)
    );

    return sortedPosts.slice(0, limit);
}
