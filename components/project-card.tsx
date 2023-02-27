"use client"

import Image from "next/image"
import React from "react"

import classNames from "@/lib/classnames"

type ProjectCardProps = {
  title: string
  imageURL: string
  children?: React.ReactNode
  stack?: string[]
  className?: string
  alternate?: boolean
  href?: string
}

const ProjectCard = ({
  title,
  imageURL,
  children,
  stack,
  className,
  alternate = false,
  href
}: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div
        className={classNames(
          "relative h-[220px] rounded-none sm:rounded-lg border border-black/5 overflow-hidden",
          className
        )}
      >
        <Image
          src={imageURL}
          alt={title}
          className="object-cover object-top"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 px-6 sm:px-0">
        <div className="text-lg">
          <span className="text-black mr-2 font-semibold">
            {title}.
            {/* {href && (
            <Link
              href={href}
              target="_blank"
              aria-label="Liga al sitio del proyecto"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </Link>
          )} */}
          </span>
          <span className="text-gray-500">{children}</span>
        </div>
        <ul className="flex flex-row gap-2">
          {stack?.map(item => {
            return (
              <li
                key={item}
                className="rounded-full bg-gray-100 px-3 py-0.5 text-xs tracking-wide text-gray-900"
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
