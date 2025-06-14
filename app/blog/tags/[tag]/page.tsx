import type { Metadata } from 'next';
import { MainContentLayout } from '../../../../components/MainContentLayout';
import { PostPreviewList } from '../../../../components/PostPreviewList';
import { getAllPostTags } from '../../../../utils/getAllPostTags';
import { getAllPosts } from '../../../../utils/getAllPosts';

export const dynamicParams = false;

export async function generateStaticParams() {
    return getAllPostTags();
}

type Props = {
    params: Promise<{ tag: string }>;
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
