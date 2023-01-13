import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"
import Image from "next/image"

import Mdx from "@/components/mdx"
import { formatDate } from "@/lib/utils"

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

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl pt-12 pb-24">
      <div>
        {post.date && (
          <div className="py-2 text-center text-sm font-semibold text-gray-500">
            Publicado <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        )}
        <h1 className="text-center font-display text-4xl font-bold">
          <Balancer>{post.title}</Balancer>
        </h1>
        {post.description && (
          <p className="py-2 text-center text-lg text-gray-700">
            <Balancer>{post.description}</Balancer>
          </p>
        )}
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={600}
            priority
            className="my-12 rounded-md shadow-lg"
          />
        )}
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
