import isAuthenticated from "@/lib/isAuthenticated"
import Link from "next/link"
import { query } from "@/lib/sanity"
import EditForm from "./EditForm"
import SignOutBtn from "./SignOutBtn"

export default async function Account(props) {
  const { _id } = await isAuthenticated()
  const q = `*[_type=="user"&&_id==$userId][0]{_id,username,email,address}`
  const user = await query(q, { userId: _id })
  const searchParams = await props.searchParams
  const isEditable = searchParams.edit === "true" ? true : false
  return (
    <div className="Container mx-auto max-w-2xl">
      <h1 className="heading">My Account</h1>
      <EditForm user={user} isEditable={isEditable} />
    </div>
  )
}
