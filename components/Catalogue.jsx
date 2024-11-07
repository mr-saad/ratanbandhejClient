import { query } from "@/lib/sanity"
import Link from "next/link"

export default async function Catalogue() {
  const data = await query(`*[_type=="product"]{type}`)
  const catalogue = [...new Set(data.map(({ type }) => type))]
  return (
    <div>
      {catalogue.map((cat) => (
        <Link
          className="block py-1 transition hover:text-white md:py-0"
          href={`/products?category=${cat}`}
          key={cat}
        >
          {cat}
        </Link>
      ))}
    </div>
  )
}
