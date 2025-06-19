import { RenderablePost } from '../types';
import { getPostMetadata } from './getPostMetadata';

export async function getRenderablePost(id: string): Promise<RenderablePost> {
    const [{ default: Content }, metadata] = await Promise.all([
        import(`../content/blog/${id}/index.mdx`),
        getPostMetadata(id),
    ]);
    return { id, ...metadata, Content };
}
