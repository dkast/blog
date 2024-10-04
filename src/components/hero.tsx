"use client"

import React from "react"
import { motion } from "framer-motion"

const titleVariants = {
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.7
    }
  },
  hidden: {
    opacity: 0
  }
}

const elVariants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      delay: i * 0.3,
      duration: 0.3
    }
  }),
  hidden: {
    opacity: 0,
    y: 10
  }
}

const Hero = () => {
  return (
    <>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="font-display text-xl font-medium text-gray-800 sm:text-2xl"
      >
        Hola, soy Daniel Castillejo
      </motion.h1>
      <div className="flex flex-col gap-2 pt-4 font-mono text-sm text-gray-600">
        <p className="sm:text-balance">
          Soy un ingeniero de software con más de 15 años de experiencia basado
          en México.
        </p>
        Actualmente me desempeño como Arquitecto de Soluciones en la industria
        automotriz implementando aplicaciones full-stack.
        <p>
          Soy entusiasta del diseño, amante de la música y guitarrista promedio.
        </p>
      </div>
    </>
  )
}

export default Hero
