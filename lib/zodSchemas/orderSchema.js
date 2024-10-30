import { z } from "zod"

export const orderSchema = z.object({
  userId: z.string(),
  formData: z.object({
    existing: z.string().nullable(),
    note: z.string(),
    address: z.string().optional(),
  }),
  colours: z
    .object({
      _id: z.string(),
      colours: z.object({ name: z.string(), quantity: z.string() }).array(),
    })
    .array(),
})
