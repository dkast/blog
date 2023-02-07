import { compareDesc } from "date-fns"
import Balancer from "react-wrap-balancer"
import { allPosts } from "contentlayer/generated"

import ProjectCard from "@/components/project-card"
import PostCard from "@/components/post-card"

export default function Home() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <main>
      <section className="pb-24 pt-32 sm:pb-32 sm:pt-44">
        <div className="mx-auto max-w-3xl px-8 sm:px-3">
          <h1 className="font-display text-3xl font-bold text-gray-800 sm:text-5xl">
            Hola, soy Daniel Castillejo
          </h1>
          <div className="flex flex-col gap-2 pt-6 text-lg leading-6 text-gray-500 sm:text-xl md:text-2xl">
            <p>
              <Balancer>
                <strong>Ingeniero de Software</strong> con más de 10 años de
                experiencia.
              </Balancer>
            </p>
            <p>
              <Balancer ratio={0.2}>
                Soy entusiasta del diseño, amante de la música y guitarrista
                promedio.
              </Balancer>
            </p>
          </div>
          <div className="flex gap-4 py-12">
            <a href="https://github.com/dkast">Github</a>
            <a href="https://twitter.com/dkast">Twitter</a>
            <a href="https://instagram.com/dkast">Instagram</a>
          </div>
        </div>
      </section>
      <section className="border-t border-b border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-8 sm:px-3">
          <small className="text-md mb-1 font-semibold uppercase tracking-widest text-gray-500">
            Proyectos
          </small>
          <h2 className="pb-8 text-2xl font-semibold md:text-3xl">
            Proyectos personales y experimentos
          </h2>
        </div>
        <div className="col-auto grid gap-8 px-0 sm:px-3">
          <ProjectCard
            title="Biztro"
            stack={["next.js", "prisma", "next-auth", "craft.js"]}
            imageURL="/images/editor.png"
            className="bg-gradient-to-r from-purple-400 to-indigo-200"
            href="https://biztro.co"
          >
            Una aplicación SAAS para restaurantes, permite la creción y
            publicación de menus digitales con código QR.
          </ProjectCard>
          <ProjectCard
            title="Deberes"
            stack={["next.js", "prisma", "next-auth", "trpc"]}
            imageURL="/images/deberes-project.png"
            className="bg-gradient-to-br from-purple-200 to-red-400"
            alternate
            href="https://github.com/dkast/deeds-app"
          >
            Aplicación web personal, mobile-first, para incentivar las buenas
            acciones de mis pequeños.
          </ProjectCard>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white via-white to-gray-200 pt-12 pb-24">
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
