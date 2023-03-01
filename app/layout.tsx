import { Inter, Space_Grotesk } from "next/font/google";

import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"

import "@/styles/globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"]
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex h-screen flex-col overflow-x-hidden">
        <MainNav />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
