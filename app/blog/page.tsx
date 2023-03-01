import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { Metadata } from "next"

import PostCard from "@/components/post-card"

export const metadata: Metadata = {
  title: "Blog"
}

export default async function BlogPage() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <main className="mx-auto max-w-3xl px-6 pt-12 pb-24 sm:px-3">
      <h1 className="mx-3 my-8 font-display text-3xl font-bold sm:text-4xl">
        Blog
      </h1>
      {posts?.length ? (
        <div className="my-4 mx-3 flex flex-col gap-4">
          {posts.map((post, index) => (
            <PostCard key={index} post={post}></PostCard>
          ))}
        </div>
      ) : (
        <p>No hay entradas</p>
      )}
    </main>
  )
}
