import type { Metadata } from "next"
import { ViewTransitions } from "next-view-transitions"
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
    <ViewTransitions>
      <html
        lang="en"
        className={`${base.variable} ${display.variable} bg-zinc-50 antialiased`}
      >
        <head />
        <body className="flex h-screen flex-col overflow-x-hidden">
          <div className="relative grid grow grid-cols-1 justify-stretch sm:grid-cols-[100px_1fr]">
            <MainNav />
            <div className="col-start-2 flex flex-col justify-start">
              <div className="grow">{children}</div>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
