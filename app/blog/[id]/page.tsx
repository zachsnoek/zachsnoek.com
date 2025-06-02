import { getAllPostIds, getPostWithMdx } from '../../../utils/posts';
import { PostContent } from './PostContent';

export const dynamicParams = false;

export async function generateStaticParams() {
    return getAllPostIds();
}

type Props = {
    params: Promise<{ id: string }>;
};

export default async function Post({ params }: Props) {
    const { id } = await params;
    const { post, mdxSource } = await getPostWithMdx(
        typeof id === 'object' ? id[0] : id
    );

    return <PostContent data={post} source={mdxSource} />;
}
