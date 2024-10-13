"use client"

import { useState } from "react"
import createAcc from "@/lib/actions/createAcc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { formSchema } from "@/lib/zodSchemas/accSchema"

export default function CreateAccount() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const { push } = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      verified: false,
    }
    const parsedData = formSchema.safeParse(data)
    if (parsedData.success) {
      const res = await createAcc(parsedData.data)
      if (res.ok) {
        alert(
          "We've sent an Verification E-Mail to " +
            data.email +
            ". Please check your Inbox & Verify your Account to continue.",
        )
        push("/sign-in")
      } else {
        setMessage(res.message)
        setTimeout(() => setMessage(""), 4000)
      }
    } else {
      setMessage(parsedData.error.issues[0].message)
      setTimeout(() => setMessage(""), 4000)
    }
    setLoading(false)
  }
  return (
    <div className="Container">
      <h1 className="heading text-center">Create an Account</h1>
      <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-lg">
        <div className="grid gap-8">
          <div className="relative">
            <input
              placeholder=" "
              required
              className="input peer"
              id="username"
              type="text"
              minLength={3}
              maxLength={20}
              name="username"
            />
            <label className="floating-label" htmlFor="username">
              Username
            </label>
          </div>
          <div className="relative">
            <input
              placeholder=" "
              required
              className="input peer"
              id="email"
              type="email"
              name="email"
            />
            <label className="floating-label" htmlFor="email">
              E-Mail
            </label>
          </div>
          <div className="relative">
            <input
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={10}
              placeholder=" "
              required
              className="input peer"
              id="phone"
              name="phone"
              type="tel"
            />
            <label className="floating-label" htmlFor="phone">
              Phone
            </label>
          </div>
          <div className="relative">
            <textarea
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={60}
              placeholder=" "
              required
              className="input peer resize-none"
              id="address"
              name="address"
              type="tel"
            ></textarea>
            <label className="floating-label" htmlFor="address">
              Address (Pincode-City)
            </label>
          </div>
        </div>
        <p className="text-pretty">
          By clicking continue, you agree to our{" "}
          <Link className="underline" href={"/terms-conditions"}>
            Terms of Service
          </Link>{" "}
          &{" "}
          <Link className="underline" href={"/privacy-poilicy"}>
            Privacy Policy
          </Link>
        </p>
        <button
          disabled={loading}
          type="submit"
          className="btn my-2 block w-full"
        >
          Continue
        </button>
        <p>
          Already have one?{" "}
          <Link className="underline" href={"/sign-in"}>
            Sign In
          </Link>
        </p>
        {message !== "" && <p className="text-red-700">{message}</p>}
        {loading && (
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
        )}
      </form>
    </div>
  )
}
