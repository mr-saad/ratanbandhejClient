import { z } from "zod"

export const signInSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "username must contain atleast 3 characters"),
  email: z.string().trim().email("Invalid E-Mail Format"),
})
