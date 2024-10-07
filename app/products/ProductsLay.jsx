"use client"
import { motion } from "framer-motion"
import Product from "@/components/Product"
import { AnimatePresence } from "framer-motion"

export default function Layout({ products }) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {products.length ? (
          products.map((product, index) => {
            return <Product key={product.slug} index={index} {...product} />
          })
        ) : (
          <p>No Products</p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
