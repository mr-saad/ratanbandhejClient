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
      <div className="Container mx-auto max-w-2xl">
        <h1 className="heading">My Account</h1>
        <EditFormWrapper user={user} isEditable={isEditable} />
        <div className="mt-5 flex flex-col gap-5">
          <Link href={"/orders"} className="btn text-center">
            <span className="flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                <path d="M12 22V12" />
                <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
                <path d="m7.5 4.27 9 5.15" />
              </svg>
              My Orders
            </span>
          </Link>
          <SignOutBtnWrapper />
        </div>
      </div>
    )
  }
}
