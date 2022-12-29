import React from "react"
import Image from "next/image"

type ProjectCardProps = {
  title: string
  imageURL?: string
  children?: React.ReactNode
  stack?: string[]
}

const ProjectCard = ({
  title,
  imageURL,
  children,
  stack
}: ProjectCardProps) => {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2">
      <div className="col-span-2">
        <Image
          src={
            "https://images.unsplash.com/photo-1672170583772-4898eb071118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
          }
          alt={title}
          width={800}
          height={600}
          className="sm:rounded-3xl"
        />
      </div>
      <div className="col-span-2 p-4 sm:col-auto">
        <h3 className="mb-2 font-display text-2xl md:text-3xl">{title}</h3>
        <ul className="flex flex-row gap-2">
          {stack?.map(item => {
            return (
              <li
                key={item}
                className="rounded-full border border-gray-400 px-3 py-0.5 text-xs tracking-wide text-gray-700"
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="col-span-2 p-4 text-gray-600 sm:col-auto">{children}</div>
    </div>
  )
}

export default ProjectCard
