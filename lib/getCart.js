"use server"
import isAuthenticated from "./isAuthenticated"
import { query } from "./sanity"

export const getCart = async () => {
  const { _id } = await isAuthenticated()
  const q = `*[_type=="product" && _id in *[_type=="user" && _id==$id].cart[]._ref]{
          _id,
          title,
          type,
          price,
          colours,
          "slug":slug.current,
          "images":images[].asset->{path,metadata{lqip}},
        }`

  try {
    const data = await query(q, { id: _id || "" })
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
