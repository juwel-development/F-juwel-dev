import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.date(),
        draft: z.boolean().optional(),
    }),
});

export const collections = { posts: postsCollection };