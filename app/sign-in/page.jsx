import isAuthenticated from "@/lib/server/isAuthenticated"
import SignInForm from "./SignInForm"

export const metadata = {
  title: "Sign In",
  alternates: {
    canonical: "/sign-in",
  },
}

export default async function LogIn() {
  const auth = await isAuthenticated()
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
        <h1 className="heading wrap-break-word">
          We&apos;ve sent an Verification E-Mail to{" "}
          <span className="break-all">{auth.email}</span> <br /> Check your
          Inbox & Verify Your Account to Continue.
        </h1>
      </div>
    )
}
