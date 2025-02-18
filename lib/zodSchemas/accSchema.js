import { z } from "zod"

export const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "username must contain atleast 3 characters")
    .refine((str) => !str.includes(" "), "username must not contain spaces"),
  email: z
    .string()
    .trim()
    .email("Invalid E-Mail Format")
    .refine((str) => !str.includes(" "), "email must not contain space"),
  phone: z.string().trim().length(10, "Invalid Phone Number Format"),
  address: z.string().trim().min(10, "Invalid Address"),
})
