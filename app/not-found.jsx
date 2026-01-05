import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mt-[calc(71px+1.25rem)] text-center">
      <h1 className="heading">404</h1>
      <p className="text-xl">
        The page you&apos;re looking for doesn&apos;t Exist.
      </p>
      <Link
        href="/"
        className="underline transition hover:text-red-800 dark:hover:text-white"
      >
        Back to Home
      </Link>
    </div>
  )
}
