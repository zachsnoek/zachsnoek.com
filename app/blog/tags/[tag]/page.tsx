import { getAllPosts, getAllTags } from '../../../../utils/posts';
import { TagContent } from './TagContent';

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

    return <TagContent tag={tag} posts={posts} />;
}
