import { ogImageSchema } from "@/lib/og"
import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "experimental-edge"
}

const interRegular = fetch(
  new URL("../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then(res => res.arrayBuffer())

const interBold = fetch(
  new URL("../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then(res => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading!.length > 140
        ? `${values.heading!.substring(0, 140)}...`
        : values.heading

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
            padding: "30px",
            backgroundImage: "linear-gradient(to bottom, #262626, #0a0a0a)"
          }}
        >
          <div tw="flex">
            <img tw="w-24 h-24 rounded-full" src="../../images/avatar.jpg" />
          </div>
          <div tw="flex flex-col">
            <span tw="text-stone-500 text-xl uppercase">Blog</span>
            <h1 tw="text-white text-5xl font-bold">{heading}</h1>
          </div>

          <div tw="text-white text-3xl">dkast.dev</div>
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
