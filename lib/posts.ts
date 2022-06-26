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
    tags: string[];
    coverImagePath: string | null;
};

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

function getIdFromFilename(filename: string) {
    return filename.replace(/\.mdx$/, '');
}

function getFrontMatter(filename: string): { content: string; data: Post } {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { content, data } = matter(fileContents);

    return {
        content,
        data: { id: getIdFromFilename(filename), ...data } as Post,
    };
}

export function getAllPostIds() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => ({
        params: {
            id: getIdFromFilename(filename),
        },
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
    const postFilenames = fs.readdirSync(postsDirectory);

    const { filter, limit } = options;

    const posts = postFilenames
        .map((filename) => {
            const { data } = getFrontMatter(filename);

            if (filter?.tag && !data.tags.includes(filter?.tag)) {
                return;
            }

            return {
                id: getIdFromFilename(filename),
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
    const { content, data } = getFrontMatter(`${id}.mdx`);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight],
        },
    });

    return { post: data, mdxSource };
}
