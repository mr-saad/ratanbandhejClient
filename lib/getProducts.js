export default async function getProducts(count, type = "") {
  const sanity = (await import("@/lib/sanity")).default
  const query =
    type !== ""
      ? `
  *[_type=="product" && type==$type ]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    "slug": slug.current,
    "image": images[0].asset->{metadata{lqip},url},
  }
  `
      : `*[_type=="product"]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    "slug": slug.current,
    "image": images[0].asset->{metadata{lqip},url},
  }`
  const params =
    type !== "" ? { type, count: count || -1 } : { count: count || -1 }

  return await sanity.fetch(query, params)
}
