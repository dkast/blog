import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"

import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"

import "@/styles/globals.css"

const base = Inter({ variable: "--font-inter", subsets: ["latin"] })
const display = Sora({
  variable: "--font-display",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    default: "Daniel Castillejo",
    template: "%s | Daniel Castillejo"
  },
  description: "Sitio personal de Daniel Castillejo",
  themeColor: "#ffffff",
  openGraph: {
    title: "Daniel Castillejo",
    type: "website",
    url: "https://dkast.dev"
  },
  twitter: {
    title: "Daniel Castillejo",
    card: "summary_large_image",
    description: "Sitio personal de Daniel Castillejo",
    creator: "@dkast"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${base.variable} ${display.variable} antialiased bg-zinc-50`}
    >
      <head />
      <body className="flex h-screen flex-col overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] justify-stretch">
          <div className="relative">
            <MainNav />
          </div>
          <div className="flex flex-col justify-start">
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
