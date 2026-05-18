import { readFile } from "node:fs/promises"
import path from "node:path"
import * as z from "zod"

export const ogImageSchema = z.object({
  title: z.string()
})

let avatarDataUrlPromise: Promise<string> | undefined

export function getOgAvatarDataUrl() {
  avatarDataUrlPromise ??= readFile(
    path.join(process.cwd(), "public", "images", "avatar.jpg")
  ).then(avatarBuffer => {
    return `data:image/jpeg;base64,${avatarBuffer.toString("base64")}`
  })

  return avatarDataUrlPromise
}
