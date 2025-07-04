import { z } from 'zod/v4';

export const schPostMetadata = z.object({
    date: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    categories: z.array(z.string()),
    originalPost: z
        .object({
            url: z.string(),
            isExclusive: z.boolean(),
        })
        .optional(),
    tags: z.array(z.string()),
});

export type PostMetadata = z.infer<typeof schPostMetadata>;

export type Post = PostMetadata & { id: string };

export type RenderablePost = Post & { Content: () => JSX.Element };
