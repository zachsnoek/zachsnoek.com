import { contentType, generateBlogPostImage, size } from '../../../og';
import { getPostMetadata } from '../../../utils/getPostMetadata';
import { Params } from './types';

export { contentType, size };

type Props = {
    params: Promise<Params>;
};

export default async function Image({ params }: Props) {
    const { id } = await params;
    const post = await getPostMetadata(id);
    return generateBlogPostImage({ title: post.title });
}
