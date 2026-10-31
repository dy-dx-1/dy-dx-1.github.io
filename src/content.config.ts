import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.md',
  }),
  // Images are paths relative to the Markdown file (e.g. in src/assets)
  // so Astro can optimize them. Videos are served as-is from public/.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(true),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      cover: image().optional(),
      gallery: z
        .array(
          z.union([
            image(),
            z.object({
              video: z.string(),
              poster: image().optional(),
            }),
          ]),
        )
        .default([]),
    }),
});

export const collections = { projects };
