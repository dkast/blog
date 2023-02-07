import { notFound } from "next/navigation"
import { allPages } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"

import Mdx from "@/components/mdx"

interface PagePageProps {
  params: {
    slug: string[]
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
        <h1 className="mx-3 my-8 text-center font-display text-4xl font-bold">
          <Balancer>{post.title}</Balancer>
        </h1>
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
