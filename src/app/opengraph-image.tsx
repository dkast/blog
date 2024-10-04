import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 1200,
  height: 630
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  try {
    const url = new URL(
      process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    )
    const avatar = `${url.protocol}//${url.host}/images/avatar.jpg`
    // Fetch font data
    const interRegular = fetch(
      new URL("../../assets/fonts/Inter-Regular.ttf", import.meta.url)
    ).then(res => res.arrayBuffer())

    const averiaRegular = fetch(
      new URL(
        "../../assets/fonts/AveriaSerifLibre-Regular.ttf",
        import.meta.url
      )
    ).then(res => res.arrayBuffer())
    return new ImageResponse(
      (
        // ImageResponse JSX element
        // ImageResponse JSX element
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "60px",
            backgroundColor: "#1C1C1C",
            backgroundImage: "radial-gradient(at left top, #1C1C1C, #262626)"
          }}
        >
          <div tw="flex">
            <img tw="w-30 h-30 rounded-full" src={avatar} />
          </div>
          <div tw="flex flex-col">
            <span tw="text-stone-400 text-2xl uppercase">
              Software Developer
            </span>
            <h1 tw="text-white text-7xl font-semibold">Daniel Castillejo</h1>
          </div>
          <div tw="flex justify-end w-full items-center">
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
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
        fonts: [
          {
            name: "Inter",
            data: await interRegular,
            style: "normal",
            weight: 400
          },
          {
            name: "Inter",
            data: await averiaRegular,
            style: "normal",
            weight: 600
          }
        ]
      }
    )
  } catch {
    return new Response("Failed to generate image", {
      status: 500
    })
  }
}
