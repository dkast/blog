import React from "react"
import Link from "next/link"
import { GlobeAltIcon } from "@heroicons/react/24/outline"

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
  return (
    <header className="border-t-8 pt-8">
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-8 sm:px-3">
        <div>
          <Link href="/" className="flex items-center gap-3 no-underline">
            <GlobeAltIcon className="h-8 w-8"></GlobeAltIcon>
            <span className="font-semibold">dkast.dev</span>
          </Link>
        </div>
        <nav className="flex gap-8">
          {navItems &&
            navItems.map((navItem, index) => {
              return (
                <Link key={index} href={navItem.href}>
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
