"use client"

import React from "react"
import { motion } from "framer-motion"
import { CircleUser, Home, PenLine, type LucideIcon } from "lucide-react"
import { Link } from "next-view-transitions"
import Image from "next/image"
import { useSelectedLayoutSegment } from "next/navigation"

import GradientBlur from "@/components/gradient-blur"
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
    <div className="relative z-10 h-20 max-h-20 sm:h-full">
      <GradientBlur className="fixed inset-0 h-24 rotate-180 sm:hidden" />
      <div className="transition-disabled fixed z-20 w-full px-6 sm:w-[100px] sm:px-0">
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
                          className="grid grid-cols-1 rounded-full no-underline"
                        >
                          {selected && (
                            <div className="z-0 col-start-1 row-start-1 rounded-full bg-gray-100 p-2"></div>
                          )}
                          <span className="z-40 col-start-1 row-start-1 text-gray-900">
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
  )
}

export default MainNav
