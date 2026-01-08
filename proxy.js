import isAuthenticated from "./lib/isAuthenticated"
import { NextResponse } from "next/server"

export default async function middleware(req) {
  const auth = await isAuthenticated()
  switch (req.nextUrl.pathname) {
    case "/profile":
      if (!auth.status)
        return NextResponse.redirect(new URL("/sign-in", req.url))
      break
    case "/sign-in":
      if (auth?.status)
        return NextResponse.redirect(new URL("/products", req.url))
      break
    case "/cart/checkout":
      if (auth.cart.length === 0)
        return NextResponse.redirect(new URL("/cart", req.url))
      break
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    // "/profile",
    // "/sign-in",
    // "/cart/checkout"
  ],
}
