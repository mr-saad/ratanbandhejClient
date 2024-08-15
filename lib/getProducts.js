export default async function getProducts(count) {
  const sanity = (await import("@/lib/sanity")).default
  return await sanity.fetch(
    `*[_type=="product"]|order(_createdAt asc)[0..$count] {
    _id,
    type,
    title,
    "slug": slug.current,
    "image": images[0].asset->{metadata{lqip},url},
  }`,
    { count: count || -1 },
  )
}
