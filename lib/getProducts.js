import { query } from "./sanity"

export default async function getProducts({ similar, type, count, _id } = {}) {
  const q =
    similar === "similar"
      ? `
  *[_type=="product" && type==$type && _id!=$_id ]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0].asset->{path,metadata{lqip}},
  }`
      : type
        ? `
  *[_type=="product" && type==$type ]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0].asset->{path,metadata{lqip}},
  }`
        : `
  *[_type=="product"]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0].asset->{path,metadata{lqip}},
  }`
  const params =
    similar === "similar"
      ? { type, count, _id }
      : type
        ? { type, count }
        : { count }

  try {
    const res = await query(q, params)
    if (res.error) return []
    return res
  } catch (error) {
    console.error(error)
    return []
  }
}
