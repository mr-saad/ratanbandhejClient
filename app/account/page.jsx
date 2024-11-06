import isAuthenticated from "@/lib/isAuthenticated"
import { redirect } from "next/navigation"
import Link from "next/link"
import { query } from "@/lib/sanity"
import EditFormWrapper from "./EditFormWrapper"
import SignOutBtnWrapper from "./SignOutBtnWrapper"

export default async function Account(props) {
  if (!(await isAuthenticated()).status) redirect("/sign-in")
  else {
    const { _id } = await isAuthenticated()
    const q = `*[_type=="user"&&_id==$userId][0]{_id,username,email,address}`
    const user = await query(q, { userId: _id })
    const searchParams = await props.searchParams

    const isEditable = searchParams.edit === "true" ? true : false
    return (
      <div className="Container mx-auto max-w-3xl">
        <h1 className="heading">My Account</h1>
        <EditFormWrapper user={user} isEditable={isEditable} />
        <div className="mt-5 flex gap-5">
          <Link href={"/orders"} className="btn">
            My Orders
          </Link>
          <SignOutBtnWrapper />
        </div>
      </div>
    )
  }
}
