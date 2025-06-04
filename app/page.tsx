import type { Metadata } from 'next';
import { Accent } from '../components/Accent/Accent';
import { MainContentLayout } from '../components/MainContentLayout';
import { PostPreviewList } from '../components/PostPreviewList';
import { Spacer } from '../components/Spacer';
import { getAllPosts } from '../utils/posts';

export const metadata: Metadata = {
    title: 'Zach Snoek',
    description:
        'Zach Snoek is full-stack software engineer writing about about JavaScript, React, CSS, and other web development topics.',
};

export default async function HomePage() {
    const recentPosts = await getAllPosts({
        limit: 3,
    });

    return (
        <MainContentLayout
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
        </MainContentLayout>
    );
}
