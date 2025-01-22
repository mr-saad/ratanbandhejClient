import "server-only"
import { query } from "./sanity"

export default async function getProducts({ similar, type, count, _id } = {}) {
  let q = `
  *[_type=="product"]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0].asset->{path,metadata{lqip}},
  }`
  if (similar === "similar") {
    q = `
  *[_type=="product" && type==$type && _id!=$_id ]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0].asset->{path,metadata{lqip}},
  }`
  } else if (type) {
    q = `
  *[_type=="product" && type==$type ]|order(_createdAt desc)[0..$count] {
    _id,
    type,
    title,
    specs,
    description,
    "slug": slug.current,
    "image":images[0].asset->{path,metadata{lqip}},
  }`
  }

  let params = { count }
  if (similar === "similar") params = { type, count, _id }
  else if (type) params = { type, count }

  try {
    const res = await query(q, params)
    if (res.error) return []
    return res
  } catch (error) {
    console.error(error)
    return []
  }
}
