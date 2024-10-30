import { query } from "./sanity"

export const getCart = async ({ _id }) => {
  const q = `*[_type=="product" && _id in *[_type=="user" && _id==$id].cart[]._ref]{
          _id,
          title,
          type,
          price,
          colours,
          "slug":slug.current,
          "images":images[].asset->{url,metadata{lqip}},
        }`

  try {
    const data = await query(q, { id: _id })
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}
