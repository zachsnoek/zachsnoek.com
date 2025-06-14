import { RenderablePost } from '../types';
import { getPostMetadata } from './getPostMetadata';

export async function getRenderablePost(id: string): Promise<RenderablePost> {
    const { default: Content } = await import(
        `../content/blog/${id}/index.mdx`
    );
    const metadata = await getPostMetadata(id);
    return { id, ...metadata, Content };
}
