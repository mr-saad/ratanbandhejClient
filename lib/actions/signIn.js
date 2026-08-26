"use server"
import { cookies } from "next/headers"
import { signInSchema } from "../zodSchemas/signInSchema"
import sanity from "../server/sanity"
import isAuthenticated from "../server/isAuthenticated"
import { SignJWT } from "jose"

export default async function signIn(formData) {
  const parsedFormData = signInSchema.safeParse(formData)
  if (parsedFormData.success) {
    try {
      const q = `*[_type=="user" && username==$username && email==$email][0]`
      const res = await sanity.fetch(q, {
        username: parsedFormData.data.username,
        email: parsedFormData.data.email,
      })
      if (res === null) {
        return { message: "Invalid username or email", ok: false }
      } else {
        const encoder = new TextEncoder()
        const token = await new SignJWT({ userId: res._id })
          .setProtectedHeader({ alg: "HS256" })
          .sign(encoder.encode(process.env.tokenKey))
        ;(await cookies()).set("ratanUser", token, {
          expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
          httpOnly: true,
        })
        const auth = await isAuthenticated()
        if (auth?.status) return { message: "Success", ok: true, auth }
        else return { message: "Failed", ok: false, auth }
      }
    } catch (error) {
      console.error(error.message)
      return { message: error.message, ok: false }
    }
  } else {
    return { message: parsedFormData.error.issues[0].message, ok: false }
  }
}
