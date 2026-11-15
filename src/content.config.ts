import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.md',
  }),
  // Images are paths relative to the Markdown file (e.g. in src/assets)
  // so Astro can optimize them. Videos use relative paths too and are
  // resolved to URLs in src/lib/projects.ts (they are copied, not optimized).
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      // Shown next to the category, e.g. 2025 or "2023–2025".
      // Coerced to text so `year: 2025` (a YAML number) also works.
      year: z.coerce.string().optional(),
      draft: z.boolean().default(true),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      cover: image().optional(),
      // Every gallery item needs a caption, shown under the image or video.
      // A caption starting with "TODO" is a placeholder: it shows in
      // `npm run dev` but is hidden on the built site.
      gallery: z
        .array(
          z.union([
            z.object({
              image: image(),
              caption: z.string(),
            }),
            z.object({
              video: z.string(),
              poster: image().optional(),
              caption: z.string(),
            }),
          ]),
        )
        .default([]),
    }),
});

export const collections = { projects };
