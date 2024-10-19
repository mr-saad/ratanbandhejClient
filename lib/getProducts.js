import client from "./sanity"
export default async function getProducts(
  count,
  type = "",
  home = "",
  similar = "",
  _id,
) {
  const query =
    home === "home"
      ? `
  *[_type=="product"]|order(_createdAt desc){
    "type":type,
    "prods":*[_type=="product" && type==^.type]| order(_createdAt desc)[0...3]{
      _id,
      type,
      title,
      specs,
      description,
      "slug": slug.current,
      "image":images[0],
      "lqip": images[0].asset->metadata.lqip,
    }
  }
  `
      : similar === "similar"
        ? `
      *[_type=="product" && type==$type && _id!=$_id ]|order(_createdAt desc)[0..$count] {
        _id,
        type,
        title,
        specs,
        description,
        "slug": slug.current,
        "image":images[0],
        "lqip": images[0].asset->metadata.lqip,
      }
      `
        : type !== ""
          ? `
  *[_type=="product" && type==$type ]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0],
    "lqip": images[0].asset->metadata.lqip,
  }
  `
          : `*[_type=="product"]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0],
    "lqip": images[0].asset->metadata.lqip,
  }`
  const params =
    similar === "similar"
      ? { type, count: count || -1, _id }
      : type !== ""
        ? { type, count: count || -1 }
        : { count: count || -1 }

  return await client.fetch(query, params)
}
