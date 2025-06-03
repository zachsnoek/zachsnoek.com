import { getAllPostIds, type Post } from '../../../utils/posts';
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
    const { default: Content, ...rest } = await import(
        `../../../content/blog/${id}/index.mdx`
    );

    const post = rest as Post;

    return (
        <PostContent post={post}>
            <Content />
        </PostContent>
    );
}
