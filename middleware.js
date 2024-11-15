import { query } from "@/lib/sanity"
import { NextResponse } from "next/server"

// let cachedETag = null
// let lastETagGeneration = 0

const generateETag = async () => {
  // const cacheDuration = 60 * 1000

  // if (cachedETag && Date.now() - lastETagGeneration < cacheDuration) {
  //   return cachedETag
  // }

  const prods = await query(`*[_type=="product"]{_updatedAt}`)
  const content = prods.map((prod) => prod._updatedAt).join(",")
  const data = new TextEncoder().encode(content)
  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  // cachedETag =
  // lastETagGeneration = Date.now()

  return [...new Uint8Array(hashBuffer)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

export async function middleware(request) {
  const pathname = request.nextUrl.pathname

  if (pathname === "/") {
    console.log("inside home page")
    const response = NextResponse.next()

    const clientETag = request.headers.get("if-none-match")
    const serverETag = await generateETag()

    if (clientETag === serverETag) {
      return new NextResponse(null, { status: 304 })
    }

    response.headers.set("ETag", serverETag)
    console.log("set: ", serverETag)

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/",
}
