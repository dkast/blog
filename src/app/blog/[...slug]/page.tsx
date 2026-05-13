import { allPosts } from "content-collections"

import "@/styles/mdx.css"

import { Metadata } from "next"
import { notFound } from "next/navigation"

import Mdx from "@/components/mdx"
import { Separator } from "@/components/ui/separator"

interface PostPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split("/")
  }))
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata | undefined> {
  const { slug } = await params
  const slugStr = slug?.join("/")
  const post = allPosts.find(post => post.slugAsParams === slugStr)

  if (!post) {
    return
  }

  const { title, date: publishedTime, description } = post
  const pageUrl = `/blog/${slugStr}`
  const ogImage = `/api/og?${new URLSearchParams({ title }).toString()}`

  return {
    title,
    description,
    openGraph: {
      siteName: "dkast.dev",
      title,
      description,
      type: "article",
      publishedTime,
      url: pageUrl,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const slugStr = slug?.join("/")
  const post = allPosts.find(post => post.slugAsParams === slugStr)

  if (!post) {
    notFound()
  }

  const formattedDate = new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(post?.date))

  return (
    <article className="mx-auto max-w-3xl pt-12 pb-24 sm:pt-36">
      <div>
        <Header
          title={post?.title}
          category={post?.category}
          description={post?.description}
          formattedDate={formattedDate}
          author="Daniel Castillejo"
          avatar="avatar.jpg"
        />
        <div className="px-6 sm:px-3">
          {/* {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              priority
              className="my-12 sm:rounded-xl sm:shadow-lg"
            />
          )} */}
          <Mdx code={post.mdx} />
        </div>
      </div>
    </article>
  )
}

function Header({
  title,
  category,
  description,
  formattedDate,
  author
}: {
  title: string
  category: string
  description?: string
  formattedDate: string
  author: string
  avatar: string
}) {
  return (
    <div className="px-8 sm:px-3">
      <div className="space-y-3">
        <div className="text-muted-foreground flex flex-row items-center gap-1 font-mono text-xs font-normal md:text-sm">
          <time>{formattedDate}</time>
          <div className="flex flex-row items-center gap-1">
            <span>-</span>
            <span className="text-muted-foreground">{author}</span>
          </div>
          <Separator orientation="vertical" className="bg-border mx-2 h-5" />
          <span className="text-primary text-xs font-normal md:text-sm">
            {category}
          </span>
        </div>
        <div>
          <h1 className="font-display text-2xl font-medium">{title}</h1>
          {description && (
            <p className="font-semilight text-muted-foreground leading-relaxed sm:text-sm md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
      <Separator className="bg-border my-10 w-20" />
    </div>
  )
}
