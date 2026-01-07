import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    projects: defineCollection({
      type: 'page',
      source: {
        include: 'projects/*.md',
        exclude: ['projects/archive/**'],
      },
      schema: z.object({
        slug: z.string(),
        image: z.string().optional(),
        title: z.string(),
        creationDate: z.string(),
        category: z.enum(['app', 'website', 'game', 'other']),
        type: z.enum(['personal', 'professional']),
        description: z.string(),
      }),
    }),
    archive: defineCollection({
      type: 'page',
      source: 'projects/archive/*.md',
      schema: z.object({
        slug: z.string(),
        image: z.string().optional(),
        title: z.string(),
        creationDate: z.string(),
        category: z.enum(['app', 'website', 'game', 'other']),
        type: z.enum(['personal', 'professional']),
        archived: z.boolean().optional(),
        description: z.string(),
      }),
    }),
  },
})
