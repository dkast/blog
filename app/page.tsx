import Balancer from "react-wrap-balancer"

import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <main>
      <section className="pb-32 pt-44">
        <div className="mx-auto max-w-3xl px-8 sm:px-3">
          <h1 className="font-display text-5xl font-bold text-gray-800">
            Hola, soy Dante Cavelari,
          </h1>
          <div className="flex flex-col gap-2 pt-6 text-xl text-gray-700 md:text-2xl">
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
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-3xl px-8 sm:px-3">
          <small className="text-md mb-1 font-semibold uppercase tracking-widest text-gray-500">
            Proyectos
          </small>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Proyectos personales y experimentos
          </h2>
        </div>
        <div className="flex flex-col gap-8 py-12">
          <ProjectCard
            title="Biztro"
            stack={["next.js", "prisma", "next-auth", "craft.js"]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mollis lorem vel dictum ullamcorper. Ut vitae libero nunc. Mauris
            eros est, molestie et hendrerit nec, vulputate vitae tellus.
          </ProjectCard>
          <ProjectCard title="Deberes" stack={["next.js", "prisma", "trpc"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mollis lorem vel dictum ullamcorper. Ut vitae libero nunc. Mauris
            eros est, molestie et hendrerit nec, vulputate vitae tellus.
          </ProjectCard>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-8 sm:px-3">
          <small className="text-md mb-1 font-semibold uppercase tracking-widest text-gray-500">
            Blog
          </small>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Últimas entradas
          </h2>
        </div>
      </section>
    </main>
  )
}
