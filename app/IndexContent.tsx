'use client';

import React from 'react';
import styled from 'styled-components';
import { Accent } from '../components/Accent';
import { ContentLayout } from '../components/ContentLayout';
import { Link } from '../components/Link';
import { PostPreviewList } from '../components/PostPreviewList';
import { Spacer } from '../components/Spacer';
import { Post } from '../utils/posts';

export function IndexContent({ posts }: { posts: Post[] }) {
    return (
        <ContentLayout
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
                <PostPreviewList posts={posts} />
            </section>
        </ContentLayout>
    );
}
const Header = styled.h1`
    line-height: 1.2;
`;
