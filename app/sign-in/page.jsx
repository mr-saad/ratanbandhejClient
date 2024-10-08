import SignInForm from "./SignInForm"
import { redirect } from "next/navigation"
import isAuthenticated from "@/lib/isAuthenticated"

export default async function LogIn() {
  const auth = await isAuthenticated()
  if (auth.status) redirect("/products")
  if (auth.verified || auth.noAcc)
    return (
      <div className="Container">
        <h1 className="heading text-center">Sign In</h1>
        <SignInForm />
      </div>
    )
  else
    return (
      <div className="Container">
        <h1 className="heading break-words">
          We&apos;ve sent an Verification E-Mail to{" "}
          <span className="break-all">{auth.email}</span> <br /> Check your
          Inbox & Verify Your Account to Continue.
        </h1>
      </div>
    )
}
