import CreateAccountForm from "./CreateAccountForm"

export const metadata = {
  title: "Create Account",
  alternates: {
    canonical: "/create-account",
  },
}

export default function CreateAccount() {
  return (
    <div className="Container">
      <h1 className="heading text-center">Create an Account</h1>
      <CreateAccountForm />
    </div>
  )
}
