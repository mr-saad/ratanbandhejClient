import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="heading">404</h1>
      <p>The page you're looking for doesn't Exist.</p>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
