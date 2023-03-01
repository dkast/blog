import { allPosts } from "contentlayer/generated"
import Image from "next/image"
import { notFound } from "next/navigation"
import Balancer from "react-wrap-balancer"

import Mdx from "@/components/mdx"

import { formatDate } from "@/lib/utils"

import "@/styles/mdx.css"

import { Metadata } from "next"

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

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata | undefined> {
  const slug = params?.slug?.join("/")
  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) {
    return
  }

  const { title, date: publishedTime, description } = post

  const url = process.env.NEXT_PUBLIC_APP_URL
  let ogImage = new URL(`${url}/api/og`)
  ogImage.searchParams.set("title", title)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url,
      images: [
        {
          url: ogImage.toString()
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.toString()]
    }
  }
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
            className="my-12 sm:rounded-xl sm:shadow-lg"
          />
        )}
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
