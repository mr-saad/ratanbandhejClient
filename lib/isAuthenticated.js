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
    address: "",
    email: "",
    cart: [],
    noAcc: true,
  }

  if (!ratanUser) return auth

  const encoder = new TextEncoder()
  try {
    const verified = await jwtVerify(
      ratanUser,
      encoder.encode(process.env.tokenKey),
    )
    if (verified) {
      const res = await query(
        `*[_type=="user"&&_id==$userId][0]{
          username,email,verified,address,
          "cart":*[_type=="product" && _id in ^.cart[]._ref]{
            _id,title,"slug":slug.current,price,colours,
            "image":images[0].asset->{path,metadata{lqip}}
       }
       }`,
        { userId: verified.payload.userId || "" },
      )
      if (res)
        auth = {
          status: true,
          verified: res.verified,
          _id: verified.payload.userId,
          username: res.username,
          address: res.address,
          email: res.email,
          cart: res.cart,
        }
    }
  } catch (error) {
    console.error(error)
  } finally {
    return auth
  }
}
