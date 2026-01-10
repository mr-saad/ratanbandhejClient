"use client"
import { useState } from "react"
import signInAction from "@/lib/actions/signIn"
import Link from "next/link"
import { signInSchema } from "@/lib/zodSchemas/signInSchema"
import { useRouter } from "next/navigation"
import useRatanContext from "@/lib/hooks/useRatanContext"
import { LoaderCircle } from "lucide-react"
import Button from "@/components/ui/Button"

export default function SignInForm() {
  const { setCart, setAuth } = useRatanContext()

  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
    }
    const parsedData = signInSchema.safeParse(data)
    if (parsedData.success) {
      const res = await signInAction(parsedData.data)
      if (res.ok) {
        setAuth(res.auth)
        setCart(res.auth.cart)
        return push("/products")
      }
      setMessage(res.message)
      setTimeout(() => setMessage(""), 4000)
    } else {
      setMessage(parsedData.error.issues[0].message)
      setTimeout(() => setMessage(""), 4000)
    }
    setLoading(false)
  }
  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-lg gap-8">
      <div className="relative">
        <input
          minLength={3}
          maxLength={12}
          required
          type="text"
          name="username"
          id="username"
          className="input peer"
          placeholder=" "
        />
        <label htmlFor="username" className="floating-label">
          Username
        </label>
      </div>
      <div className="relative">
        <input
          required
          type="email"
          name="email"
          id="email"
          className="input peer"
          placeholder=" "
        />
        <label htmlFor="email" className="floating-label">
          E-Mail
        </label>
      </div>
      <Button disabled={loading} className={"justify-self-start"}>
        Continue
      </Button>

      <p>
        Don&apos;t have an account yet?{" "}
        <Link href={"/create-account"} className="underline">
          Create One
        </Link>
      </p>
      {message !== "" && <p className="text-red-700">{message}</p>}
      {loading && <LoaderCircle />}
    </form>
  )
}
