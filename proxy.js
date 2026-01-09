import { NextResponse } from "next/server"

export default function proxy(req) {
  const token = req.cookies.get("ratanUser")?.value
  switch (req.nextUrl.pathname) {
    case "/profile":
      if (!token) return NextResponse.redirect(new URL("/sign-in", req.url))
      break
    case "/sign-in":
      if (token) return NextResponse.redirect(new URL("/", req.url))
      break
    case "/cart/checkout":
      if (!token) return NextResponse.redirect(new URL("/sign-in", req.url))
      break
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/profile", "/sign-in", "/cart/checkout"],
}
