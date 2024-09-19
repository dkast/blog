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
    <main className="mx-auto w-full max-w-3xl px-8 sm:px-3">
      <section className="pt-10 sm:pt-36">
        <h1 className="font-display text-lg font-medium sm:text-xl">Blog</h1>
        {posts?.length ? (
          <div className="my-4 flex flex-col gap-4">
            {posts.map((post, index) => (
              <PostCard key={index} post={post}></PostCard>
            ))}
          </div>
        ) : (
          <p>No hay entradas</p>
        )}
      </section>
    </main>
  )
}
