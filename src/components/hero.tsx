"use client"

import React from "react"
import { motion, type Variants } from "framer-motion"

const titleVariants: Variants = {
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      ease: "easeOut" as const,
      duration: 0.7
    }
  },
  hidden: {
    opacity: 0,
    filter: "blur(8px)"
  }
}

const elVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ease: "easeOut" as const,
      delay: i * 0.2,
      duration: 0.3
    }
  }),
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(4px)"
  }
}

const Hero = () => {
  return (
    <>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="font-display text-foreground text-xl font-medium sm:text-3xl"
      >
        Hola, soy Daniel Castillejo
      </motion.h1>
      <motion.div className="text-secondary-foreground flex flex-col gap-2 pt-4 text-base sm:text-lg">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={elVariants}
          className="text-pretty sm:text-balance"
        >
          Soy un ingeniero de software con más de 15 años de experiencia basado
          en México. Actualmente me desempeño como Arquitecto de Soluciones en
          la industria automotriz implementando aplicaciones full-stack.
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={elVariants}
          className="text-pretty sm:text-balance"
        >
          Soy entusiasta del diseño, amante de la música y guitarrista promedio.
        </motion.p>
      </motion.div>
    </>
  )
}

export default Hero
