"use server"
import { Resend } from "resend"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import Template from "@/emails/Template"
import { formSchema } from "../zodSchemas/accSchema"
import { mutate } from "../sanity"
import { render } from "@react-email/components"

const resend = new Resend(process.env.resend_apiKey)

export default async function createAcc(formData) {
  const parsedFormData = formSchema.safeParse(formData)
  if (parsedFormData.success) {
    try {
      const res = await mutate([
        {
          create: { _type: "user", ...parsedFormData.data, cart: [] },
        },
      ])
      if (res?.transactionId) {
        ;(await cookies()).set("registeredAcc", res.email, {
          expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
        })
        const token = jwt.sign({ email: res.email }, process.env.tokenKey)
        const { error } = await resend.emails.send({
          from: `Ratan Bandhej <no-reply@ratanbandhej.shop>`,
          subject: `Verify Your Account`,
          to: res.email,
          // react:
          //   <Template username={res.username} token={token} userId={res._id}
          //   />,
          //
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
