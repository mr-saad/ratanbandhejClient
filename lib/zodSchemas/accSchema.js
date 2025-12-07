import { z } from "zod"

export const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "username must contain atleast 3 characters")
    .refine(
      (str) => !str.includes(" "),
      "username must not contain empty spaces",
    ),
  email: z.email("Invalid E-Mail Format"),
  phone: z.string().trim().length(10, "Invalid Phone Number"),
  address: z.string().trim().min(10, "Invalid Address"),
})
