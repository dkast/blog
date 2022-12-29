import React from "react"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
const MainNav = () => {
  return (
    <header className="pt-8">
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-8 sm:px-3">
        <div className="flex items-center gap-3">
          <GlobeAltIcon className="h-8 w-8"></GlobeAltIcon>
          <span>@dkast</span>
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
