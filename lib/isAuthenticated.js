import "server-only"
import { cookies } from "next/headers"
import { query } from "./sanity"

export default async function isAuthenticated() {
  const userId = (await cookies()).get("userId")?.value
  let auth = {
    status: false,
    verified: false,
    _id: "",
    username: "",
    email: "",
    cart: [],
    noAcc: true,
  }

  if (!userId) return auth

  const q = `*[_type=="user"&&_id==$userId][0]{
    _id,username,email,verified,
    "cart":*[_type=="product" && _id in ^.cart[]._ref]{
      _id,title,"slug":slug.current,price,colours,
      "image":images[0].asset->{path,metadata{lqip}}
      }
    }`
  const res = await query(q, { userId })

  if (res)
    auth = {
      status: true,
      verified: res.verified,
      _id: res._id,
      username: res.username,
      email: res.email,
      cart: res.cart,
    }

  return auth
}
