import { Metadata } from 'next';
import { getAllPosts } from '../../utils/posts';
import { BlogContent } from './BlogContent';

export const metadata: Metadata = {
    title: "Zach Snoek's Blog",
    description:
        'Blog posts and tutorials about JavaScript, React, CSS, and more!',
};

export default function Blog() {
    const posts = getAllPosts();
    return <BlogContent posts={posts} />;
}
