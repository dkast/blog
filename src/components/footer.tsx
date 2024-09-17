import React from "react"

const Footer = () => {
  return (
    <footer className="p-8">
      <div className="mx-auto max-w-3xl px-3 text-sm text-gray-400">
        <div className="flex items-center justify-between">
          <span className="hidden sm:inline">
            &copy; {new Date().getFullYear()} Daniel Castillejo
          </span>
          <div className="flex gap-4">
            <a href="https://twitter.com/dkast" className="no-underline">
              @dkast
            </a>
            <a href="https://github.com/dkast" className="no-underline">
              github
            </a>
            <a href="https://instagram.com/dkast" className="no-underline">
              instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
