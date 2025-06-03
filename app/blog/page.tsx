import { Metadata } from 'next';
import { getAllPosts } from '../../utils/posts';
import { BlogContent } from './BlogContent';

export const metadata: Metadata = {
    title: "Zach Snoek's Blog",
    description:
        'Blog posts and tutorials about JavaScript, React, CSS, and more!',
};

export default async function Blog() {
    const posts = await getAllPosts();
    return <BlogContent posts={posts} />;
}
