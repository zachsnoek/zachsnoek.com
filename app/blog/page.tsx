import type { Metadata } from 'next';
import React from 'react';
import { MainContentLayout } from '../../components/MainContentLayout';
import { PostPreviewList } from '../../components/PostPreviewList';
import { getAllPosts } from '../../utils/getAllPosts';

export const metadata: Metadata = {
    title: {
        absolute: "Zach Snoek's Blog",
    },
    description:
        'Blog posts and tutorials about JavaScript, React, CSS, and more!',
};

export default async function BlogPage() {
    const posts = await getAllPosts();
    return (
        <MainContentLayout header="Blog">
            <PostPreviewList posts={posts} />
        </MainContentLayout>
    );
}
