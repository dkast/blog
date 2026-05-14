"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRightIcon, GitFork } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// import GradientBlur from "@/components/gradient-blur"
import { cn } from "@/lib/utils"

type ProjectCardProps = {
  title: string
  imageURL: string
  children?: React.ReactNode
  stack?: string[]
  className?: string
  href: string
}

const ProjectCard = ({
  title,
  imageURL,
  children,
  stack,
  className,
  href
}: ProjectCardProps) => {
  const domain = new URL(href)
  return (
    <div className="rounded-xl bg-zinc-200/40 p-1.5">
      <motion.div
        // whileHover={{ scale: 1.02 }}
        className={cn(
          "relative grid h-[220px] grid-cols-1 gap-2 overflow-hidden rounded-lg border border-black/5 p-4",
          className
        )}
      >
        <Image
          src={imageURL}
          alt={title}
          className="object-cover object-top transition-transform hover:scale-102"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </motion.div>
      {/* <GradientBlur className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" /> */}
      <div className="z-20 flex flex-col justify-end gap-4 text-sm">
        <div className="px-1.5 pt-2">
          <span className="text-foreground mr-1 font-medium">{title}.</span>
          <span className="text-muted-foreground text-balance">{children}</span>
        </div>
        <div className="px-1.5 pb-1.5">
          {href && (
            <Link
              href={href}
              target="_blank"
              aria-label="Liga al sitio del proyecto"
              className="text-muted-foreground flex items-center gap-2 font-mono text-sm no-underline"
            >
              <span>{domain.hostname}</span>
              {domain.hostname.includes("github") ? (
                <GitFork size={16} />
              ) : (
                <ArrowUpRightIcon size={16} />
              )}
            </Link>
          )}
        </div>
        {/* <ul className="flex flex-row gap-2">
          {stack?.map(item => {
            return (
              <li
                key={item}
                className="bg-muted/50 text-foreground rounded-full px-3 py-0.5 text-xs tracking-wide"
              >
                {item}
              </li>
            )
          })}
        </ul> */}
      </div>
    </div>
  )
}

export default ProjectCard
