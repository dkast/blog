"use client"

import React from "react"
import Link from "next/link"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { useSelectedLayoutSegment } from "next/navigation"
import classNames from "@/lib/classnames"

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
    title: "Acerca",
    href: "/about"
  }
]

const MainNav = () => {
  const segment = useSelectedLayoutSegment()
  console.log(segment)
  return (
    <header className="pt-8">
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-8 sm:px-3">
        <div>
          <Link href="/" className="flex items-center gap-3 no-underline">
            <GlobeAltIcon className="h-8 w-8"></GlobeAltIcon>
            <span className="font-semibold">dkast.dev</span>
          </Link>
        </div>
        <nav className="flex gap-2 rounded-full bg-gray-100">
          {navItems &&
            navItems.map((navItem, index) => {
              return (
                <Link
                  key={index}
                  href={navItem.href}
                  className={classNames(
                    "py-2 px-4 no-underline",
                    navItem.href.startsWith(`/${segment}`) ? "bg-white" : ""
                  )}
                >
                  {navItem.title}
                </Link>
              )
            })}
        </nav>
      </div>
    </header>
  )
}

export default MainNav
