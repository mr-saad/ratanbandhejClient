import { mutate, query } from "@/lib/sanity"
import jwt from "jsonwebtoken"
import { isRedirectError } from "next/dist/client/components/redirect"
import { redirect } from "next/navigation"

export async function GET(req) {
  try {
    const q = `*[_type=="user" && _id==$userId][0]`
    const userId = req.nextUrl.searchParams.get("userId") || ""
    const user = await query(q, { userId })
    if (user?._id) {
      const token = req.nextUrl.searchParams.get("token")
      const ver = jwt.verify(token, process.env.tokenKey)
      if (ver) {
        const res = await mutate([
          {
            patch: {
              id: user._id,
              set: {
                verified: true,
              },
            },
          },
        ])

        if (res?.transactionId) {
          redirect("/sign-in")
        } else {
          return new Response(JSON.stringify(res))
        }
      } else {
        return new Response("Invalid Token")
      }
    }
    return new Response("Invalid User")
  } catch (error) {
    if (isRedirectError(error)) throw error
    console.error(error)
    return new Response(error)
  }
}
