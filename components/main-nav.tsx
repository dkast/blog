"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import React from "react"

interface NavItem {
  title: string
  href: string
}

const navItems: NavItem[] = [
  {
    title: "Inicio",
    href: "/"
  },
  {
    title: "Blog",
    href: "/blog"
  },
  {
    title: "Acerca",
    href: "/about"
  }
]

const MainNav = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <header className="pt-8">
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-8 sm:px-3">
        <div>
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/images/avatar.jpg"
              alt="Daniel Castillejo"
              width={40}
              height={40}
              className="rounded-full border border-black/10 shadow"
            ></Image>
            <span className="hidden font-semibold sm:inline">dkast.dev</span>
          </Link>
        </div>
        <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-full after:shadow-highlight after:shadow-white/5 after:transition">
          <nav className="flex gap-2 rounded-full border border-black/5 bg-white p-1 shadow-md shadow-gray-700/5">
            {navItems &&
              navItems.map((navItem, index) => {
                const selected =
                  navItem.href.startsWith(`/${segment}`) ||
                  (navItem.href === "/" && segment === null)
                return (
                  <Link
                    key={index}
                    href={navItem.href}
                    className="rounded-full py-2 px-4 no-underline relative"
                  >
                    {selected && (
                      <motion.div
                        layoutId="menu"
                        className="absolute bg-gray-100 rounded-full inset-0 z-0"
                      ></motion.div>
                    )}
                    <span className="z-30 relative text-gray-900">
                      {navItem.title}
                    </span>
                  </Link>
                )
              })}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MainNav
