import isAuthenticated from "@/lib/isAuthenticated"
import EditForm from "./EditForm"
import client from "@/lib/sanity"
import { redirect } from "next/navigation"
import Link from "next/link"
import SignOutBtn from "./SignOutBtn"

export default async function Account(props) {
  const searchParams = await props.searchParams;
  if (!(await isAuthenticated()).status) redirect("/sign-in")
  else {
    const { _id } = await isAuthenticated()
    const user = await client.fetch(
      `*[_type=="user" && _id==$_id][0]{_id,username,email,address}`,
      { _id },
    )

    const isEditable = searchParams.edit === "true" ? true : false
    return (
      <div className="Container mx-auto max-w-3xl">
        <h1 className="heading">My Account</h1>
        <EditForm user={user} isEditable={isEditable} />
        <div className="mt-5 flex gap-5">
          <Link href={"/orders"} className="btn">
            My Orders
          </Link>
          <SignOutBtn />
        </div>
      </div>
    )
  }
}
