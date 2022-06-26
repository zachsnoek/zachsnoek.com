import React from 'react';
import { GetStaticProps } from 'next';
import { MainLayout } from '../../components/Layout';
import { getAllPosts, Post } from '../../lib/posts';
import { PostPreviewList } from '../../components/PostPreviewList';

type Props = {
    posts: Post[];
};

export default function Blog({ posts }: Props) {
    return (
        <MainLayout title="Blog" header="Blog">
            <PostPreviewList posts={posts} />
        </MainLayout>
    );
}

export const getStaticProps: GetStaticProps<Props> = () => {
    const posts = getAllPosts();
    return {
        props: {
            posts,
        },
    };
};
