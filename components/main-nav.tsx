import React from "react"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
const MainNav = () => {
  return (
    <header>
      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-8 sm:px-3">
        <div>
          <GlobeAltIcon className="h-8 w-8"></GlobeAltIcon>
        </div>
        <nav>
          <ul className="flex gap-8">
            <li>Proyectos</li>
            <li>Acerca</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainNav
