import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import rehypeImageToolkit from "rehype-image-toolkit"
import rehypeImageSize from "rehype-img-size"
import rehypePrettyCode, { type LineElement } from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import { z } from "zod"

const imageToolkitOptions = {
  enableMdxJsx: false
} as const

const posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Coerce YAML date values to ISO string for JSON-serializable Next.js props
    date: z.coerce.date().transform(d => d.toISOString()),
    published: z.boolean().default(true),
    image: z.string().optional(),
    category: z.string(),
    // Required by the frontmatter parser; compileMDX reads this as the MDX body
    content: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: "vesper",
            keepBackground: true,
            onVisitLine(node: LineElement) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }]
              }
            }
          }
        ],
        [rehypeImageSize, { dir: "public" }],
        [rehypeImageToolkit, imageToolkitOptions]
      ]
    })
    const slugAsParams = document._meta.path
    const slug = `/blog/${slugAsParams}`
    return { ...document, mdx, slug, slugAsParams }
  }
})

const pages = defineCollection({
  name: "pages",
  directory: "content/pages",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    // Required by the frontmatter parser; compileMDX reads this as the MDX body
    content: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypeImageToolkit, imageToolkitOptions]]
    })
    const slugAsParams = document._meta.path
    const slug = `/${slugAsParams}`
    return { ...document, mdx, slug, slugAsParams }
  }
})

export default defineConfig({
  content: [posts, pages]
})
