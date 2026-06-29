import sanity from "@/lib/server/sanity"
import { NextResponse } from "next/server"

export const GET = async ({ nextUrl }) => {
  const search = nextUrl.searchParams.get("search").trim()
  const res = await sanity.fetch(
    `*[_type=="product" && title match $search + "*"]{
    "slug":slug.current,
    title,
    "image":images[0].asset->{url,"lqip":metadata.lqip},
    }`,
    {
      search,
    },
  )
  return NextResponse.json(res)
}
