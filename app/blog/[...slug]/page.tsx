import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import Mdx from "@/components/mdx"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split("/")
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find(post => post.slugAsParams === slug)
  console.log(slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <div>
        <h1>{post.title}</h1>
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
