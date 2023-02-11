"use client"

import { delay, motion } from "framer-motion"
import React from "react"
import Balancer from "react-wrap-balancer"

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "backInOut",
      delay: i * 0.1,
      duration: 0.5
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
        variants={variants}
        custom={0}
        className="font-display text-3xl font-bold text-gray-800 sm:text-5xl"
      >
        Hola, soy Daniel Castillejo
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={1}
        className="flex flex-col gap-2 pt-6 text-lg leading-6 text-gray-500 sm:text-xl md:text-2xl"
      >
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
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={2}
        className="flex gap-4 py-12"
      >
        <a href="https://github.com/dkast">Github</a>
        <a href="https://twitter.com/dkast">Twitter</a>
        <a href="https://instagram.com/dkast">Instagram</a>
      </motion.div>
    </>
  )
}

export default Hero
