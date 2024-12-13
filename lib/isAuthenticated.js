import "server-only"
import { cookies } from "next/headers"
import { query } from "./sanity"
import { jwtVerify } from "jose"

export default async function isAuthenticated() {
  const ratanUser = (await cookies()).get("ratanUser")?.value
  let auth = {
    status: false,
    verified: false,
    _id: "",
    username: "",
    email: "",
    cart: [],
    noAcc: true,
  }

  if (!ratanUser) return auth

  const encoder = new TextEncoder()
  const ver = await jwtVerify(ratanUser, encoder.encode(process.env.tokenKey))

  if (ver) {
    try {
      const res = await query(
        `*[_type=="user"&&_id==$userId][0]{
          _id,username,email,verified,
          "cart":*[_type=="product" && _id in ^.cart[]._ref]{
            _id,title,"slug":slug.current,price,colours,
            "image":images[0].asset->{path,metadata{lqip}}
       }
       }`,
        { userId: ver.payload.userId || "" },
      )
      auth = {
        status: true,
        verified: res.verified,
        _id: res._id,
        username: res.username,
        email: res.email,
        cart: res.cart,
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  return auth
}
