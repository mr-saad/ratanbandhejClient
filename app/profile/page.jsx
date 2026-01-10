"use client"
import { useState, useEffect } from "react"
import editFormAction from "@/lib/actions/editForm"
import { useRouter } from "next/navigation"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Button from "@/components/ui/Button"
import { LoaderCircle } from "lucide-react"

export default function Account() {
  const { auth, authLoading } = useRatanContext()

  useEffect(() => {
    if (authLoading) return
    if (!auth.status) replace("/sign-in")
  }, [authLoading, auth?.status])

  const [loading, setLoading] = useState(false)
  const [editable, setEditable] = useState(false)
  const [message, setMessage] = useState("")
  const { replace } = useRouter()

  const Submit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      _id: auth._id,
      username: formData.get("username"),
      address: formData.get("address"),
    }
    try {
      const res = await editFormAction(data)
      if (res.ok) replace("/profile")
      setEditable(false)
      setMessage(res.message)
    } catch (error) {
      alert(error.message)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading)
    return (
      <div className="Container highlight mx-auto max-w-2xl text-3xl font-bold">
        Loading
      </div>
    )

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
              disabled={!editable}
            />
            <label className="floating-label" htmlFor="username">
              Username
            </label>
          </div>
          <div className="relative">
            <textarea
              disabled={!editable}
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
          {editable ? (
            <div className="flex gap-2">
              <Button disabled={loading}>
                {loading ? <LoaderCircle /> : "Save"}
              </Button>
              <Button
                disabled={loading}
                type="button"
                onClick={() => setEditable(false)}
                variant={"secondary"}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button type="button" onClick={() => setEditable(true)}>
              Edit
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
