import * as z from "zod"

export const ogImageSchema = z.object({
  heading: z.string().optional(),
  type: z.string(),
})
