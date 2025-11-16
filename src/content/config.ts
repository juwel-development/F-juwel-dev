import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()),
    author: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts: postsCollection };
