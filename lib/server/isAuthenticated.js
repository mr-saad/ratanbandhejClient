import "server-only"
import { cookies } from "next/headers"
import sanity from "./sanity"
import { jwtVerify } from "jose"

export default async function isAuthenticated() {
  const ratanUser = (await cookies()).get("ratanUser")?.value
  let auth = {
    status: false,
    verified: false,
    _id: "",
    _createdAt: "",
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
      const res = await sanity.fetch(
        `*[_type=="user"&&_id==$userId][0]{
          username,email,verified,address,_createdAt,
          cart[]->{
            _id,title,"slug":slug.current,price,colours,
            "image":images[0].asset->{url,metadata{lqip}}
          }
       }`,
        { userId: verified.payload.userId || "" },
      )
      if (res)
        auth = {
          status: true,
          verified: res.verified,
          _id: verified.payload.userId,
          _createdAt: res._createdAt,
          username: res.username,
          address: res.address,
          email: res.email,
          cart: res?.cart || [],
        }
    }
  } catch (error) {
    ;(await cookies()).delete("ratanUser")
    console.error(error)
  } finally {
    return auth
  }
}
