import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import parseAttr from "md-attr-parser"
import rehypeImageSize from "rehype-img-size"
import rehypePrettyCode, { type LineElement } from "rehype-pretty-code"
import remarkGfm from "remark-gfm"
import { z } from "zod"

function escapeHtmlAttribute(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

function applyImageAttributes(content: string) {
  return content.replace(
    /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*(\{[^}]*\})/g,
    (
      _,
      alt: string,
      src: string,
      title: string | undefined,
      attrText: string
    ) => {
      const parsed = parseAttr(attrText)
      const attributes = [
        `src="${escapeHtmlAttribute(src)}"`,
        alt ? `alt="${escapeHtmlAttribute(alt)}"` : null,
        title ? `title="${escapeHtmlAttribute(title)}"` : null
      ].filter(Boolean) as string[]

      const classNames = parsed.prop.class
      const identifier = parsed.prop.id
      const { class: _class, id: _id, ...rest } = parsed.prop
      const normalizedId = Array.isArray(identifier)
        ? identifier[0]
        : identifier

      if (normalizedId) {
        attributes.push(`id="${escapeHtmlAttribute(normalizedId)}"`)
      }

      if (classNames) {
        const classValue = Array.isArray(classNames)
          ? classNames.join(" ")
          : String(classNames)
        attributes.push(`class="${escapeHtmlAttribute(classValue)}"`)
      }

      Object.entries(rest).forEach(([key, value]) => {
        if (value != null) {
          const normalizedValue = Array.isArray(value)
            ? value.join(" ")
            : String(value)
          attributes.push(`${key}="${escapeHtmlAttribute(normalizedValue)}"`)
        }
      })

      return `<img ${attributes.join(" ")} />`
    }
  )
}

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
    const content = applyImageAttributes(document.content)
    const mdx = await compileMDX(
      context,
      {
        ...document,
        content
      },
      {
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
          [rehypeImageSize, { dir: "public" }]
        ]
      }
    )
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
    const content = applyImageAttributes(document.content)
    const mdx = await compileMDX(context, {
      ...document,
      content
    })
    const slugAsParams = document._meta.path
    const slug = `/${slugAsParams}`
    return { ...document, mdx, slug, slugAsParams }
  }
})

export default defineConfig({
  content: [posts, pages]
})
