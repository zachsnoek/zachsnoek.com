import type { Metadata } from 'next';
import { MainContentLayout } from '../../../../components/MainContentLayout';
import { PostPreviewList } from '../../../../components/PostPreviewList';
import { getAllPosts } from '../../../../utils/getAllPosts';

export const dynamicParams = false;

type Params = { tag: string };

export async function generateStaticParams(): Promise<Params[]> {
    const posts = await getAllPosts();
    return posts.flatMap((post) => post.tags).map((tag) => ({ tag }));
}

type Props = {
    params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const tag = decodeURIComponent((await params).tag);
    return {
        title: `Posts about "${tag}"`,
        description: `Zach's posts about "${tag}"`,
    };
}

export default async function Tag({ params }: Props) {
    const tag = decodeURIComponent((await params).tag);
    const posts = await getAllPosts({
        filter: {
            tag,
        },
    });

    return (
        <MainContentLayout header={`Posts about "${tag}"`}>
            <PostPreviewList posts={posts} />
        </MainContentLayout>
    );
}
