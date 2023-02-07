"use client"

import React from "react"
import Link from "next/link"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { useSelectedLayoutSegment } from "next/navigation"
import Image from "next/image"

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
            {/* <GlobeAltIcon className="h-8 w-8"></GlobeAltIcon> */}
            <Image
              src="/images/avatar.jpg"
              alt="Daniel Castillejo"
              width={40}
              height={40}
              className="rounded-full border shadow"
            ></Image>
            <span className="font-semibold">dkast.dev</span>
          </Link>
        </div>
        <nav className="flex gap-2 rounded-full border border-gray-300/50 bg-white p-1 shadow-md shadow-gray-100">
          {navItems &&
            navItems.map((navItem, index) => {
              return (
                <Link
                  key={index}
                  href={navItem.href}
                  className={classNames(
                    "rounded-full py-2 px-4 no-underline",
                    navItem.href.startsWith(`/${segment}`) ||
                      (navItem.href === "/" && segment === null)
                      ? "bg-gray-100"
                      : ""
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
