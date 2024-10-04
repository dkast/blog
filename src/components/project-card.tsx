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
    <div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={cn(
          "relative grid h-[220px] grid-cols-1 gap-2 overflow-hidden rounded-lg border-0 border-black/5 p-4 shadow-xl",
          className
        )}
      >
        <Image
          src={imageURL}
          alt={title}
          className="object-cover object-top transition-transform hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </motion.div>
      {/* <GradientBlur className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" /> */}
      <div className="font-mono z-20 flex flex-col justify-end gap-4">
        <div className="pt-8 text-sm">
          <span className="mr-2 font-medium text-black">{title}.</span>
          <span className="text-balance font-light text-gray-800">
            {children}
          </span>
        </div>
        <div>
          {href && (
            <Link
              href={href}
              target="_blank"
              aria-label="Liga al sitio del proyecto"
              className="flex items-center gap-2 no-underline"
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
        <ul className="flex flex-row gap-2">
          {stack?.map(item => {
            return (
              <li
                key={item}
                className="rounded-full bg-gray-200/50 px-3 py-0.5 text-xs tracking-wide text-gray-900"
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
