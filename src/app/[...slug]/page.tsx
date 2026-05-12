import Balancer from "react-wrap-balancer"
import { allPages } from "content-collections"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import Mdx from "@/components/mdx"

interface PagePageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateMetadata({
  params
}: PagePageProps): Promise<Metadata | undefined> {
  const { slug } = await params
  const slugStr = slug?.join("/")
  const post = allPages.find(post => post.slugAsParams === slugStr)

  if (!post) {
    return
  }

  return {
    title: post.title
  }
}

export async function generateStaticParams(): Promise<
  { slug: string[] }[]
> {
  return allPages.map(post => ({
    slug: post.slugAsParams.split("/")
  }))
}

export default async function PagePage({ params }: PagePageProps) {
  const { slug } = await params
  const slugStr = slug?.join("/")
  const post = allPages.find(post => post.slugAsParams === slugStr)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-8 sm:px-3">
      <div className="pt-10 sm:pt-36">
        <h1 className="mb-8 font-display text-lg font-medium sm:text-xl">
          {post.title}
        </h1>
        <Mdx code={post.mdx} />
      </div>
    </article>
  )
}
