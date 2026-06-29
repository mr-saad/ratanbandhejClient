import sanity from "@/lib/server/sanity"

export const GET = async (req) => {
  const userId = req.nextUrl.searchParams.get("userId") || ""
  const q = `*[_type=="order" && user._ref == $userId]{
    _id,_createdAt,status,product->{title,price,"image":images[0].asset->{url,"lqip":metadata.lqip}},
  }`
  try {
    const res = await sanity.fetch(q, { userId })
    return new Response(JSON.stringify(res))
  } catch (error) {
    return new Response(JSON.stringify({ error }))
  }
}
