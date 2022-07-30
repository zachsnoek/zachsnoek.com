import React from 'react';
import { GetStaticProps } from 'next';
import { Accent } from '../components/Accent';
import { CustomLayout } from '../components/Layout';
import { Link } from '../components/Link';
import { getAllPosts, Post } from '../lib/posts';
import { Spacer } from '../components/Spacer';
import { Break } from '../components/Break';
import { PostPreviewList } from '../components/PostPreviewList';
import styled from 'styled-components';

type Props = {
    recentPosts: Post[];
};

export default function Home({ recentPosts }: Props) {
    return (
        <CustomLayout title="Zach Snoek">
            <Header>
                Hey, I&apos;m <Accent text="Zach!" />
                <br />
                I&apos;m a <Accent text="software engineer" /> from Washington,
                USA.
            </Header>
            <Spacer size={4} />
            <section>
                <p>
                    I currently work at{' '}
                    <Link href="https://aloftappraisal.com" target="_blank">
                        Aloft, Inc.
                    </Link>{' '}
                    where I work with TypeScript, React.js, and Node.js.
                </p>
            </section>
            <Break />
            <section>
                <h2>Recent blog posts</h2>
                <Spacer size={4} />
                <PostPreviewList posts={recentPosts} />
            </section>
        </CustomLayout>
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
