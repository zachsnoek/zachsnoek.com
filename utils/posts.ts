import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

export type Post = {
    id: string;
    date: string;
    title: string;
    description: string | null;
    categories: string[];
    originalPost?: {
        url: string;
        isExclusive: boolean;
    };
    tags: string[];
    coverImagePath: string | null;
};

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

function getFrontMatter(directory: string): { content: string; data: Post } {
    const fullPath = path.join(postsDirectory, directory, 'index.mdx');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { content, data } = matter(fileContents);

    return {
        content,
        data: { id: directory, ...data } as Post,
    };
}

export function getAllPostIds() {
    const directories = fs.readdirSync(postsDirectory);

    return directories.map((directory) => ({
        id: directory,
    }));
}

export function getAllTags() {
    const posts = getAllPosts();
    return posts
        .flatMap((post) => post.tags)
        .map((tag) => ({ params: { tag } }));
}

type GetAllPostsOptions = {
    filter?: {
        tag?: string;
    };
    limit?: number;
};

export function getAllPosts(queryOptions: GetAllPostsOptions = {}): Post[] {
    const options = { limit: 100, ...queryOptions };
    const postDirectories = fs.readdirSync(postsDirectory);

    const { filter, limit } = options;

    const posts = postDirectories
        .map((directory) => {
            const { data } = getFrontMatter(directory);

            if (filter?.tag && !data.tags.includes(filter?.tag)) {
                return;
            }

            return {
                id: directory,
                ...data,
            } as Post;
        })
        .filter((x) => x);

    const sortedPosts = posts.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        }
        return 0;
    });

    return sortedPosts.slice(0, limit);
}

export async function getPostWithMdx(id: string) {
    const { content, data } = getFrontMatter(id);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight],
        },
    });

    return { post: data, mdxSource };
}
