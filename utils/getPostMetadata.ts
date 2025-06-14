import { PostMetadata, schPostMetadata } from '../types';

export async function getPostMetadata(id: string): Promise<PostMetadata> {
    const { metadata } = await import(`../content/blog/${id}/metadata.ts`);
    return schPostMetadata.parse(metadata);
}
