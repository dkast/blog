import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"

/** @type {import('contentlayer/source-files/').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: doc => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: doc => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    date: {
      type: "date",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    image: {
      type: "string",
      required: true
    }
  },
  computedFields
}))

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Page, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          }
        }
      ]
    ]
  }
})