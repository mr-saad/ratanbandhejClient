"use server"
import { Resend } from "resend"
import Template from "@/emails/Template"
import { formSchema } from "../zodSchemas/accSchema"
import { mutate, query } from "../server/sanity"
import { SignJWT } from "jose"

const resend = new Resend(process.env.resend_apiKey)

export default async function createAcc(formData) {
  const parsedFormData = formSchema.safeParse(formData)
  if (parsedFormData.success) {
    try {
      const res = await query(`*[_type=="user"&&email==$email][0]`, {
        email: parsedFormData.data.email,
      })
      if (res) {
        return { message: "User with this Email already exists", ok: false }
      }

      const create = await mutate([
        {
          create: {
            _type: "user",
            ...parsedFormData.data,
            verified: false,
            cart: [],
          },
        },
      ])
      if (create?.transactionId) {
        const encoder = new TextEncoder()
        const token = await new SignJWT({
          userId: create.results[0].document._id,
        })
          .setProtectedHeader({ alg: "HS256" })
          .sign(encoder.encode(process.env.tokenKey))

        const { error } = await resend.emails.send({
          from: `Ratan Bandhej <onboarding@resend.dev>`,
          subject: `Verify Your Account`,
          to: create.results[0].document.email,
          react: (
            <Template
              username={create.results[0].document.username}
              token={token}
            />
          ),
        })

        if (error) {
          console.error(error)
          return { message: error.message, ok: false }
        }
        return { message: "Inserted", ok: true }
      }
    } catch (error) {
      console.error(error)
      return { message: error.message, ok: false }
    }
  } else {
    return { message: parsedFormData.error.issues[0].message, ok: false }
  }
}
