import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import Hero from "@/components/hero"
import PostCard from "@/components/post-card"
import ProjectCard from "@/components/project-card"

import "@/styles/gradient-blur.css"

export default function Home() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <main className="mx-auto max-w-3xl">
      <section className="px-8 pt-24 sm:px-3 sm:pt-36">
        <Hero />
      </section>
      <div className="my-10 sm:my-16" />
      <section className="px-8 sm:px-3">
        <Subheading
          eyebrow="Proyectos"
          title="Proyectos personales y experimentos"
        />
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-8">
          <ProjectCard
            title="Biztro"
            stack={["next.js", "prisma", "next-auth", "craft.js"]}
            imageURL="/images/editor.png"
            className="bg-gradient-to-r from-purple-400 to-indigo-500"
            href="https://biztro.co"
          >
            Aplicación SaaS para crear menus digitales con código QR.
          </ProjectCard>
          <ProjectCard
            title="Deberes"
            stack={["next.js", "prisma", "next-auth", "trpc"]}
            imageURL="/images/deberes-project.png"
            className="bg-gradient-to-br from-purple-500 to-red-400"
            href="https://github.com/dkast/deeds-app"
          >
            Aplicación web para incentivar las buenas acciones de mis pequeños.
          </ProjectCard>
        </div>
      </section>
      <div className="my-10 sm:my-16" />
      <section className="px-8 pb-24 sm:px-3 sm:pb-32">
        <Subheading eyebrow="Blog" title="Últimas entradas" />
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

function Subheading({
  eyebrow,
  title,
  className
}: {
  eyebrow: string
  title: string
  className?: string
}) {
  return (
    <div className={className}>
      <small className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-500">
        {eyebrow}
      </small>
      <h2 className="pb-8 text-lg font-medium md:text-xl">{title}</h2>
    </div>
  )
}
