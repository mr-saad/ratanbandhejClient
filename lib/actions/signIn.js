"use server"
import sanity from "@/lib/sanity"
import { cookies } from "next/headers"
import { signInSchema } from "../zodSchemas/signInSchema"

export default async function signIn(formData) {
  const parsedFormData = signInSchema.safeParse(formData)
  if (parsedFormData.success) {
    try {
      const res = await sanity.fetch(
        `*[_type=="user" && username==$username && email==$email][0]`,
        {
          username: parsedFormData.data.username,
          email: parsedFormData.data.email,
        },
      )
      if (res === null) {
        return { message: "Invalid username or email" }
      } else {
        cookies().set("userId", res._id, {
          expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
        })
        return { message: "Success", ok: true }
      }
    } catch (error) {
      console.error(error.message)
      return { message: error.message, ok: false }
    }
  } else {
    return { message: parsedFormData.error.issues[0].message, ok: false }
  }
}
