import React from "react"
import Image from "next/image"
import Link from "next/link"

import classNames from "@/lib/classnames"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

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
    <div
      className={classNames(
        "mx-auto grid h-[500px] max-w-3xl grid-cols-1 gap-2 overflow-hidden rounded-none sm:h-[300px] sm:grid-cols-2 sm:rounded-2xl",
        className
      )}
    >
      <div className="relative min-h-[200px]">
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
      <div
        className={classNames(
          "order-first flex flex-col justify-end gap-4 p-8 sm:order-last",
          alternate ? "sm:order-first" : "sm:order-last"
        )}
      >
        <h3 className="flex items-baseline gap-2 font-display text-2xl md:text-3xl">
          <span>{title}</span>
          {href && (
            <Link
              href={href}
              target="_blank"
              aria-label="Liga al sitio del proyecto"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </Link>
          )}
        </h3>
        <div className="leading-6 text-black/70">{children}</div>
        <ul className="flex flex-row gap-2">
          {stack?.map(item => {
            return (
              <li
                key={item}
                className="rounded-full bg-black/60 px-3 py-0.5 text-xs tracking-wide text-white/90"
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
