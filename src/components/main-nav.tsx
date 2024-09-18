"use client"

import React from "react"
import { motion } from "framer-motion"
import { CircleUser, Home, PenLine, type LucideIcon } from "lucide-react"
import { Link } from "next-view-transitions"
import Image from "next/image"
import { useSelectedLayoutSegment } from "next/navigation"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

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
    <div className="transition-disabled absolute inset-0 z-30 mx-auto h-20 sm:h-full">
      <div className="px-6 sm:fixed sm:w-[100px] sm:px-0">
        <div className="flex grow flex-row items-center justify-between gap-10 py-4 sm:h-screen sm:flex-col sm:justify-start sm:gap-20">
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
            <nav className="flex flex-row gap-2 rounded-full border border-black/5 bg-white p-1 py-1 sm:flex-col">
              <TooltipProvider>
                {navItems &&
                  navItems.map((navItem, index) => {
                    const selected =
                      navItem.href.startsWith(`/${segment}`) ||
                      (navItem.href === "/" && segment === null)
                    return (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <Link
                            href={navItem.href}
                            className="relative rounded-full no-underline"
                          >
                            {selected && (
                              <motion.div
                                layoutId="menu"
                                className="absolute inset-0 z-0 rounded-full bg-gray-100 p-2"
                              ></motion.div>
                            )}
                            <span className="relative z-40 text-gray-900">
                              <navItem.Icon className="size-8 p-2" />
                            </span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          {navItem.title}
                        </TooltipContent>
                      </Tooltip>
                    )
                  })}
              </TooltipProvider>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav
