import { withContentCollections } from "@content-collections/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**"
      }
    ]
  }
}

export default withContentCollections(nextConfig)
