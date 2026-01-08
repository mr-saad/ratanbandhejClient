"use client"
import { useEffect, useState } from "react"
import editFormAction from "@/lib/actions/editForm"
import { useRouter } from "next/navigation"
import useRatanContext from "@/lib/hooks/useRatanContext"

export default function Account() {
  const [mount, setMount] = useState(false)
  useEffect(() => setMount(true), [])

  const { replace } = useRouter()
  const { auth } = useRatanContext()
  if (mount && !auth.status) return replace("/sign-in")

  const [loading, setLoading] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  const [message, setMessage] = useState("")

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
    <div className="Container mx-auto max-w-2xl">
      <h1 className="heading">My Profile</h1>
      <form className="mt-10" onSubmit={Submit}>
        <div className="grid gap-10">
          <div className="relative">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={auth.username}
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
              defaultValue={auth.address}
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
              <button disabled={loading} className="btn" type="submit">
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
              <button
                className="btn-secondary"
                onClick={() => setIsEditable(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button className="btn" onClick={() => setIsEditable(true)}>
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
