import { ogImageSchema } from "@/lib/og"
import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "experimental-edge"
}

const interRegular = fetch(
  new URL("../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then(res => res.arrayBuffer())

const groteskBold = fetch(
  new URL("../../assets/fonts/SpaceGrotesk-Bold.ttf", import.meta.url)
).then(res => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  try {
    const fontRegular = await interRegular
    const fontBold = await groteskBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading!.length > 140
        ? `${values.heading!.substring(0, 140)}...`
        : values.heading
    const avatar = `${url.protocol}//${url.host}/images/avatar.jpg`

    // const fontSize = heading!.length > 100 ? "70px" : "100px"

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "60px 40px",
            backgroundImage: "linear-gradient(to bottom, #262626, #0a0a0a)"
          }}
        >
          <div tw="flex">
            <img tw="w-30 h-30 rounded-full" src={avatar} />
          </div>
          <div tw="flex flex-col">
            <span tw="text-stone-400 text-2xl uppercase">Blog</span>
            <h1 tw="text-white text-6xl font-bold">{heading}</h1>
          </div>
          <div tw="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height={48}
              width={48}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <span tw="text-white text-3xl ml-4">dkast.dev</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal"
          },
          {
            name: "Inter",
            data: fontBold,
            weight: 700,
            style: "normal"
          }
        ]
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500
    })
  }
}
