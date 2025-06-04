import { MainContentLayout } from '../../../../components/MainContentLayout';
import { PostPreviewList } from '../../../../components/PostPreviewList';
import { getAllPosts, getAllTags } from '../../../../utils/posts';

export const dynamicParams = false;

export async function generateStaticParams() {
    return getAllTags();
}

type Props = {
    params: Promise<{ tag: string }>;
};

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
