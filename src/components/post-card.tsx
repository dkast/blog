import React from "react"
import { Link } from "next-view-transitions"

import { formatDate } from "@/lib/utils"
import { Post } from ".contentlayer/generated/types"

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="flex gap-4">
      <div className="min-w-[80px] text-right">
        <span className="font-mono text-xs font-light leading-7 text-gray-500 sm:text-sm">
          {formatDate(post.date)}
        </span>
      </div>
      <div>
        <Link href={post.slug} className="no-underline">
          <h2 className="font-display text-lg no-underline">{post.title}</h2>
        </Link>
        <small className="text-sm text-gray-500">{post.description}</small>
      </div>
    </article>
  )
}

export default PostCard
