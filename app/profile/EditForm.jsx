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
      address: formData.get("address"),
    }
    const res = await editFormAction(data)
    if (res.ok) replace("/profile")
    setMessage(res.message)
    setLoading(false)
  }

  return (
    <form className="mt-10" onSubmit={Submit}>
      <div className="grid gap-10">
        <div className="relative">
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={user.username}
            placeholder=" "
            className="input peer disabled:opacity-50"
            disabled={!isEditable}
          />
          <label className="floating-label" htmlFor="username">
            Username
          </label>
        </div>
        <div className="relative">
          <textarea
            disabled={!isEditable}
            pattern="[0-9]{10}"
            minLength={10}
            maxLength={60}
            placeholder=" "
            required
            defaultValue={user.address}
            className="input peer disabled:opacity-50"
            id="address"
            name="address"
          ></textarea>
          <label className="floating-label" htmlFor="address">
            Address
          </label>
        </div>
      </div>
      {message !== "" && <p className="mt-2">message</p>}
      <div className="mt-2 flex flex-wrap gap-2">
        {isEditable ? (
          <div className="flex gap-2">
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
              href={"/profile"}
            >
              Cancel
            </Link>
          </div>
        ) : (
          <Link prefetch href={"/profile?edit=true"} className="btn flex gap-1">
            Edit
          </Link>
        )}
      </div>
    </form>
  )
}
