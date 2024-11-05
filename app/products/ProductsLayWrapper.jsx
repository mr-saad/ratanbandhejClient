"use client"

import dynamic from "next/dynamic"

const ProductsLay = dynamic(() => import("./ProductsLay"), { ssr: false })

export default function ProductsLayWrapper({ products }) {
  return <ProductsLay products={products} />
}
