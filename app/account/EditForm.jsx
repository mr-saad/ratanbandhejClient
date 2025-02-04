"use client"

import { useState } from "react"
import editFormAction from "@/lib/actions/editForm"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function EditForm({ user, isEditable }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const { replace } = useRouter()

  const Submit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      _id: user._id,
      username: formData.get("username"),
      email: formData.get("email"),
      address: formData.get("address"),
    }
    const res = await editFormAction(data)
    if (res.ok) replace("/account")
    setMessage(res.message)
    setLoading(false)
  }

  return (
    <form className="mt-10" onSubmit={Submit}>
      <div className="grid gap-10">
        <div className="peer relative">
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={user.username}
            placeholder=" "
            className="input disabled:opacity-50"
            disabled={!isEditable}
          />
          <label className="floating-label" htmlFor="username">
            Username
          </label>
        </div>
        <div className="peer relative">
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
            placeholder=" "
            className="input disabled:opacity-50"
            disabled={!isEditable}
          />
          <label className="floating-label" htmlFor="email">
            E-Mail
          </label>
        </div>
        <div className="peer relative">
          <textarea
            disabled={!isEditable}
            pattern="[0-9]{10}"
            minLength={10}
            maxLength={60}
            placeholder=" "
            required
            defaultValue={user.address}
            className="input peer resize-none disabled:opacity-50"
            id="address"
            name="address"
          ></textarea>
          <label className="floating-label" htmlFor="address">
            Address
          </label>
        </div>
      </div>
      {message !== "" && <p className="mt-2">message</p>}
      {isEditable ? (
        <div className="mt-2 flex justify-stretch gap-4">
          <button
            disabled={loading}
            className="btn flex-1 items-center"
            type="submit"
          >
            {loading ? (
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
                className="animate-spin"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            ) : (
              "Save"
            )}
          </button>
          <Link
            prefetch
            className="btn-secondary flex-1 text-center"
            href={"/account"}
          >
            Cancel
          </Link>
        </div>
      ) : (
        <Link
          prefetch
          href={"/account?edit=true"}
          className="btn inline-flex items-center justify-center gap-1 mt-2 text-center"
        >
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
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Edit Profile
        </Link>
      )}
    </form>
  )
}
