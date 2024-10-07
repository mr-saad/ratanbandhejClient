import { z } from "zod"

export const signInSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "username must contain atleast 3 characters")
    .max(12, "username must contain under 12 characters"),
  email: z.string().trim().email("Invalid E-Mail Format"),
})
