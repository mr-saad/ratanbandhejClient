import Link from "next/link"

export default function LogIn() {
  return (
    <div>
      <p>
        By clicking continue, you agree to our{" "}
        <Link href={"/terms-conditions"}>Terms of Service</Link> and{" "}
        <Link href={"/privacy-poilicy"}>Privacy Policy.</Link>
      </p>
    </div>
  )
}
