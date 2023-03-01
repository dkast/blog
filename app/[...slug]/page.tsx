import { allPages } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Balancer from "react-wrap-balancer"

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
    <article className="mx-auto max-w-3xl pt-12 pb-24">
      <div>
        <h1 className="mx-3 my-8 text-center font-display text-3xl font-bold sm:text-4xl">
          <Balancer>{post.title}</Balancer>
        </h1>
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
