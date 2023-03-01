import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"

import "@/styles/globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    default: "Daniel Castillejo",
    template: "%s | Daniel Castillejo"
  },
  description: "Sitio personal de Daniel Castillejo",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  openGraph: {
    title: "Daniel Castillejo",
    type: "website",
    url: "https://dkast.dev",
    images: [
      {
        url: "https://dkast.dev/og.jpg",
        width: 1200,
        height: 675
      }
    ]
  },
  twitter: {
    title: "Daniel Castillejo",
    card: "summary_large_image",
    description: "Sitio personal de Daniel Castillejo",
    creator: "@dkast",
    images: ["https://dkast.dev/og.jpg"]
  }
}

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
