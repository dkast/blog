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
      duration: 0.7
    }
  }),
  hidden: {
    opacity: 0,
    y: 50
  }
}

const Hero = () => {
  return (
    <>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className="font-display text-lg font-medium text-gray-800 sm:text-xl"
      >
        Hola, soy Daniel Castillejo
      </motion.h1>
      <div className="flex flex-col gap-2 pt-4 text-sm text-gray-600 sm:text-base">
        <p className="text-balance">
          Ingeniero de Software con más de 10 años de experiencia. Soy
          entusiasta del diseño, amante de la música y guitarrista promedio.
        </p>
      </div>
    </>
  )
}

export default Hero
