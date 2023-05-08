import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import Hero from "@/components/hero"
import PostCard from "@/components/post-card"
import ProjectCard from "@/components/project-card"

export default function Home() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <main>
      <section className="pb-10 pt-32 sm:pb-16 sm:pt-44">
        <div className="mx-auto max-w-3xl px-8 sm:px-3">
          <Hero />
        </div>
      </section>
      <div className="gridline my-10 sm:my-16" />
      <section className="pb-3 sm:pb-6">
        <div className="mx-auto max-w-3xl px-8 sm:px-3">
          <small className="text-md mb-1 font-semibold uppercase tracking-widest text-gray-500">
            Proyectos
          </small>
          <h2 className="pb-8 text-2xl font-semibold md:text-3xl">
            Proyectos personales y experimentos
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2 grid gap-8 px-0 sm:px-3">
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
            Aplicación web personal para incentivar las buenas acciones de mis
            pequeños.
          </ProjectCard>
        </div>
      </section>
      <div className="gridline my-10 sm:my-16" />
      <section className="bg-gradient-to-b from-white via-white to-gray-200 pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-8 sm:px-3">
          <small className="text-md mb-1 font-semibold uppercase tracking-widest text-gray-500">
            Blog
          </small>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Últimas entradas
          </h2>
          {posts?.length ? (
            <div className="my-4 flex flex-col gap-4">
              {posts.map((post, index) => (
                <PostCard key={index} post={post}></PostCard>
              ))}
            </div>
          ) : (
            <p>No hay entradas</p>
          )}
        </div>
      </section>
    </main>
  )
}
