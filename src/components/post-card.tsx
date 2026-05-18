import React from "react"
import type { Post } from "content-collections"
import { Link } from "next-view-transitions"

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  const formattedDate = new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(post?.date))

  return (
    <article className="flex gap-4">
      <div className="min-w-[80px] text-right">
        <span className="text-muted-foreground font-mono text-xs leading-7 font-light sm:text-sm">
          {formattedDate}
        </span>
      </div>
      <div>
        <Link href={post.slug} className="no-underline">
          <h2 className="font-display text-lg no-underline">{post.title}</h2>
        </Link>
        <small className="text-muted-foreground text-sm">
          {post.description}
        </small>
      </div>
    </article>
  )
}

export default PostCard
