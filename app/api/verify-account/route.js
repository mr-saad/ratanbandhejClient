import sanity from "@/lib/server/sanity"
import { jwtVerify } from "jose"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { redirect } from "next/navigation"

export async function GET(req) {
  try {
    const token = req.nextUrl.searchParams.get("token") || ""
    if (token) {
      const encoder = new TextEncoder()
      const ver = await jwtVerify(token, encoder.encode(process.env.tokenKey))
      if (ver) {
        await sanity
          .patch(ver.payload?.userId)
          .set({
            verified: true,
          })
          .commit()
        return redirect("/sign-in")
      }
    }
    return Response.json({ message: "Unauthorized" }, { status: 401 })
  } catch (error) {
    if (isRedirectError(error)) throw error
    console.error(error)
    return Response.json(error)
  }
}
