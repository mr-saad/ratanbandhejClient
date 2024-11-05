"use client"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"

const Product = dynamic(() => import("@/components/Product"), { ssr: false })

export default function Layout({ products }) {
  return (
    <motion.div
      layout
      className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {products.length ? (
          products.map((product) => {
            return <Product key={product.slug} {...product} />
          })
        ) : (
          <p>No Products</p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
