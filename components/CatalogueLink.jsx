"use client"

import Link from "next/link"

export default function CatalogueLink({ cat }) {
  return (
    <Link
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      className="block py-1 transition hover:text-white md:py-0"
      href={`/products?category=${cat.replaceAll(" ", "+")}`}
      key={cat}
      scroll={false}
    >
      {cat}
    </Link>
  )
}
