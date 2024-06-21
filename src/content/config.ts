import { defineCollection, z, type SchemaContext } from 'astro:content';

const seoSchema = ({ image }: SchemaContext) => (
    z.object({
        title: z.string().min(5).max(120).optional(),
        description: z.string().min(15).max(160).optional(),
        image: z
            .object({
                src: image(),
                alt: z.string().optional()
            })
            .optional(),
        pageType: z.enum(['website', 'article']).default('website')
    })
);

const blog = defineCollection({
    schema: (context: SchemaContext) => (
        z.object({
            title: z.string(),
            excerpt: z.string().optional(),
            image: z.object({
                src: context.image(),
                alt: z.string()
            }).optional(),
            publishDate: z.coerce.date(),
            isFeatured: z.boolean().default(false),
            tags: z.array(z.string()).default([]),
            seo: seoSchema(context).optional()
        })
    )
});

const pages = defineCollection({
    schema: (context: SchemaContext) => (
        z.object({
            title: z.string(),
            seo: seoSchema(context).optional()
        })
    )
});

const projects = defineCollection({
    schema: (context: SchemaContext) => (
        z.object({
            title: z.string(),
            description: z.string().optional(),
            publishDate: z.coerce.date(),
            isFeatured: z.boolean().default(false),
            seo: seoSchema(context).optional()
        })
    )
});

export const collections = { blog, pages, projects };
