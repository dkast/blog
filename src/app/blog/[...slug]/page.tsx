import { allPosts } from "contentlayer/generated"

import "@/styles/mdx.css"

import { Metadata } from "next"
import { notFound } from "next/navigation"

import Mdx from "@/components/mdx"
import { Separator } from "@/components/ui/separator"

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
      siteName: "dkast.dev",
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

  const formattedDate = new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(post?.date))

  return (
    <article className="mx-auto max-w-3xl pb-24 pt-12 sm:pt-36">
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
          <Mdx code={post.body.code} />
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
        <div className="flex flex-row items-center gap-1 text-xs font-medium text-gray-400 md:text-sm">
          <time>{formattedDate},</time>
          <div className="flex flex-row items-center gap-1">
            <span>por</span>
            <span className="text-gray-600">{author}</span>
          </div>
          <Separator orientation="vertical" className="mx-2 h-5 bg-gray-200" />
          <span className="text-xs font-medium text-orange-500 md:text-sm">
            {category}
          </span>
        </div>
        <div>
          <h1 className="font-display text-2xl font-medium">{title}</h1>
          {description && (
            <p className="font-semilight leading-relaxed text-gray-500 sm:text-sm md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
      <Separator className="my-10 w-20 bg-gray-200" />
    </div>
  )
}
