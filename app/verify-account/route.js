import client from "@/lib/sanity"
import jwt from "jsonwebtoken"
import { isRedirectError } from "next/dist/client/components/redirect"
import { redirect } from "next/navigation"

export async function GET(req) {
  try {
    const user = await client.fetch(`*[_type=="user" && _id==$userId][0]`, {
      userId: req.nextUrl.searchParams.get("userId") || "",
    })
    if (user?._id) {
      const token = req.nextUrl.searchParams.get("token")
      const ver = jwt.verify(token, process.env.tokenKey)
      if (ver) {
        await client
          .patch(user._id)
          .set({
            verified: true,
          })
          .commit()
        redirect("/sign-in")
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
