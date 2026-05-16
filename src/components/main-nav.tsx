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
      <GradientBlur className="fixed inset-0 h-20 rotate-180 sm:hidden" />
      <div
        aria-hidden="true"
        className="from-background fixed inset-x-0 top-0 z-15 h-20 bg-linear-to-b to-transparent sm:hidden"
      />
      <div className="transition-disabled fixed z-20 w-full px-6 sm:w-[100px] sm:px-0">
        <div className="flex grow flex-row items-center justify-between gap-10 py-4 sm:h-screen sm:flex-col sm:justify-start sm:gap-16">
          <header>
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/images/avatar.jpg"
                alt="Daniel Castillejo"
                width={40}
                height={40}
                className="border-border/10 rounded-full border shadow"
              ></Image>
              {/* <span className="hidden font-semibold sm:inline">dkast.dev</span> */}
            </Link>
          </header>
          <nav className="flex flex-row gap-2 rounded-full bg-white/50 p-1 py-1 shadow inset-ring inset-ring-white/60 backdrop-blur sm:flex-col">
            {navItems &&
              navItems.map((navItem, index) => {
                const selected =
                  navItem.href.startsWith(`/${segment}`) ||
                  (navItem.href === "/" && segment === null)
                return (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Link
                            href={navItem.href}
                            className="grid grid-cols-1 rounded-full no-underline"
                          >
                            {selected && (
                              <div className="bg-muted z-0 col-start-1 row-start-1 rounded-full p-2"></div>
                            )}
                            <span className="text-foreground z-40 col-start-1 row-start-1">
                              <navItem.Icon className="size-8 p-2" />
                            </span>
                          </Link>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        {navItem.title}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default MainNav
