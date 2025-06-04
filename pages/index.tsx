import React from 'react';
import { GetStaticProps } from 'next';
import { Accent } from '../components/Accent/Accent';
import { MainLayout } from '../components/Layout';
import { Link } from '../components/Link/Link';
import { getAllPosts, Post } from '../utils/posts';
import { Spacer } from '../components/Spacer';
import { PostPreviewList } from '../components/PostPreviewList';
import styled from 'styled-components';

type Props = {
    recentPosts: Post[];
};

export default function Home({ recentPosts }: Props) {
    return (
        <MainLayout
            title="Zach Snoek"
            header={
                <Header>
                    Hey, I&apos;m <Accent>Zach!</Accent>
                </Header>
            }
        >
            <section>
                <p>I&apos;m a full-stack software engineer from Detroit, MI.</p>
                <Spacer size={2} />
                <p>
                    I currently work at{' '}
                    <Link href="https://aloftappraisal.com" target="_blank">
                        Aloft, Inc.
                    </Link>{' '}
                    where I work with TypeScript, React.js, and Node.js.
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

const Header = styled.h1`
    line-height: 1.2;
`;

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
