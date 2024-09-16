"use client"

import React from "react"
import { motion } from "framer-motion"
import { CircleUser, Home, PenLine, type LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

interface NavItem {
  title: string
  Icon: LucideIcon
  href: string
}

const navItems: NavItem[] = [
  {
    title: "Inicio",
    Icon: Home,
    href: "/"
  },
  {
    title: "Blog",
    Icon: PenLine,
    href: "/blog"
  },
  {
    title: "Acerca",
    Icon: CircleUser,
    href: "/about"
  }
]

const MainNav = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <div className="mx-auto absolute inset-0">
      <div className="fixed w-[100px]">
        <div className="flex flex-col py-4 gap-20 h-screen grow items-center justify-start">
          <header>
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/images/avatar.jpg"
                alt="Daniel Castillejo"
                width={40}
                height={40}
                className="rounded-full border border-black/10 shadow-sm"
              ></Image>
              {/* <span className="hidden font-semibold sm:inline">dkast.dev</span> */}
            </Link>
          </header>
          <div className="relative">
            <nav className="flex flex-col gap-2 py-1 rounded-full border border-black/5 bg-white p-1">
              {navItems &&
                navItems.map((navItem, index) => {
                  const selected =
                    navItem.href.startsWith(`/${segment}`) ||
                    (navItem.href === "/" && segment === null)
                  return (
                    <Link
                      key={index}
                      href={navItem.href}
                      className="rounded-full no-underline relative"
                    >
                      {selected && (
                        <motion.div
                          layoutId="menu"
                          className="absolute p-2 bg-gray-100 rounded-full inset-0 z-0"
                        ></motion.div>
                      )}
                      <span className="z-30 relative text-gray-900">
                        <navItem.Icon className="size-8 p-2" />
                      </span>
                    </Link>
                  )
                })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav
