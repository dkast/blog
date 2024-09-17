"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRightIcon, GitFork } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import GradientBlur from "@/components/gradient-blur"
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
    <motion.div whileHover={{ y: -5 }} className="px-2 sm:px-3">
      <div
        className={cn(
          "grid grid-cols-1 gap-2 p-4 relative h-[420px] rounded-lg border-0 border-black/5 shadow-xl overflow-hidden",
          className
        )}
      >
        <Image
          src={imageURL}
          alt={title}
          className="object-cover object-bottom"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <GradientBlur className="inset-x-0 bottom-0 absolute h-2/3 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="flex flex-col justify-end gap-4 z-20">
          <div className="text-base">
            <span className="text-white mr-2 font-semibold">{title}.</span>
            <span className="text-white/80 text-balance">{children}</span>
          </div>
          <div>
            {href && (
              <Link
                href={href}
                target="_blank"
                aria-label="Liga al sitio del proyecto"
                className="flex gap-2 no-underline items-center text-white/75 hover:text-white"
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
                  className="rounded-full bg-gray-100/75 px-3 py-0.5 text-xs tracking-wide text-gray-900"
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
