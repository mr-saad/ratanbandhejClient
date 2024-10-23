import { cookies } from "next/headers"
import client from "./sanity"

export default async function isAuthenticated() {
  const id = (await cookies()).get("userId")?.value
  const registeredAcc = (await cookies()).get("registeredAcc")?.value

  if (id) {
    const res = await client.fetch(`*[_type=="user" && _id==$id][0]`, { id })
    if (res)
      return {
        status: true,
        verified: true,
        _id: res._id,
        username: res.username,
        email: res.email,
      }
  } else {
    if (registeredAcc) {
      const res = await client.fetch(
        `*[_type=="user" && email==$registeredAcc][0]`,
        { registeredAcc },
      )
      if (res) {
        if (res?.verified) {
          return {
            status: false,
            verified: true,
            _id: res._id,
            username: res.username,
            email: res.email,
          }
        } else {
          return { status: false, verified: false, email: res?.email }
        }
      } else {
        return { status: false, verified: false, noAcc: true }
      }
    }
    return { status: false, verified: false, noAcc: true }
  }
}
