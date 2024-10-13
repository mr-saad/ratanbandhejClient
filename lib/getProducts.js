import client from "./sanity"
export default async function getProducts(count, type = "", home = "") {
  const query =
    home === "home"
      ? `
  *[_type=="product"]|order(_createdAt desc){
    "type":type,
    "prods":*[_type=="product" && type==^.type][0...3]{
      _id,
      type,
      title,
      specs,
      description,
      "slug": slug.current,
      "image": images[0].asset->{metadata{lqip},url},
    }
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
    "image": images[0].asset->{metadata{lqip},url},
  }
  `
        : `*[_type=="product"]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image": images[0].asset->{metadata{lqip},url},
  }`
  const params =
    type !== "" ? { type, count: count || -1 } : { count: count || -1 }

  return await client.fetch(query, params)
}
