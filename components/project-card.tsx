import React from "react"
import Image from "next/image"

import classNames from "@/lib/classnames"

type ProjectCardProps = {
  title: string
  imageURL: string
  children?: React.ReactNode
  stack?: string[]
  className?: string
  alternate?: boolean
}

const ProjectCard = ({
  title,
  imageURL,
  children,
  stack,
  className,
  alternate = false
}: ProjectCardProps) => {
  return (
    <div
      className={classNames(
        "mx-auto grid h-[400px] max-w-3xl grid-cols-1 gap-2 overflow-hidden rounded-none sm:grid-cols-2 sm:rounded-2xl",
        className
      )}
    >
      <div className="relative min-h-[200px]">
        <Image
          src={imageURL}
          alt={title}
          className="object-contain object-left-bottom sm:object-bottom"
          fill
        />
      </div>
      <div
        className={classNames(
          "order-first flex flex-col justify-end gap-4 p-8 sm:order-last",
          alternate ? "sm:order-first" : "sm:order-last"
        )}
      >
        <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
        <div className="leading-6 text-gray-600">{children}</div>
        <ul className="flex flex-row gap-2">
          {stack?.map(item => {
            return (
              <li
                key={item}
                className="rounded-full bg-black/70 px-3 py-0.5 text-xs tracking-wide text-white/90"
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
