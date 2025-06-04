import React from 'react';
import { GetStaticProps } from 'next';
import { Accent } from '../components/Accent/Accent';
import { MainLayout } from '../components/Layout';
import { getAllPosts, Post } from '../utils/posts';
import { Spacer } from '../components/Spacer';
import { PostPreviewList } from '../components/PostPreviewList';

type Props = {
    recentPosts: Post[];
};

export default function Home({ recentPosts }: Props) {
    return (
        <MainLayout
            title="Zach Snoek"
            header={
                <h1 style={{ lineHeight: 1.2 }}>
                    Hey, I&apos;m <Accent>Zach!</Accent>
                </h1>
            }
        >
            <section>
                <p>
                    I&apos;m a product-focused senior software engineer from
                    Detroit, MI.
                </p>
                <Spacer size={3} />
                <p>
                    I lead full-stack projects from idea to launch using React,
                    TypeScript, Node, and SQL. I embrace ambiguity, have strong
                    product instincts, and build with care and attention to
                    detail.
                </p>
            </section>
            <Spacer size={8} />
            <section>
                <h2>Latest posts</h2>
                <Spacer size={6} />
                <PostPreviewList posts={recentPosts} />
            </section>
        </MainLayout>
    );
}

export const getStaticProps: GetStaticProps<Props> = () => {
    const recentPosts = getAllPosts({
        limit: 3,
    });
    return {
        props: {
            recentPosts,
        },
    };
};
