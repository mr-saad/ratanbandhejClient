import { query } from "@/lib/sanity"
import { NextResponse } from "next/server"

export const GET = async ({ nextUrl }) => {
  const search = nextUrl.searchParams.get("search").trim()
  const res = await query(
    `*[_type=="product" && title match $search + "*"]{
    "slug":slug.current,
    title,
    "image":images[0].asset->{url,metadata{lqip}},
    }`,
    {
      search,
    },
  )
  return NextResponse.json(res)
}
