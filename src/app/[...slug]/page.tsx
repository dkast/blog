import Balancer from "react-wrap-balancer"
import { allPages } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import Mdx from "@/components/mdx"

interface PagePageProps {
  params: {
    slug: string[]
  }
}

export async function generateMetadata({
  params
}: PagePageProps): Promise<Metadata | undefined> {
  const slug = params?.slug?.join("/")
  const post = allPages.find(post => post.slugAsParams === slug)

  if (!post) {
    return
  }

  return {
    title: post.title
  }
}

export async function generateStaticParams(): Promise<
  PagePageProps["params"][]
> {
  return allPages.map(post => ({
    slug: post.slugAsParams.split("/")
  }))
}

export default async function PagePage({ params }: PagePageProps) {
  const slug = params?.slug?.join("/")
  const post = allPages.find(post => post.slugAsParams === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl w-full px-8 sm:px-3">
      <div className="pt-20 sm:pt-36">
        <h1 className="mb-8 font-display text-lg font-medium sm:text-xl">
          {post.title}
        </h1>
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
