import Product from "@/components/ui/Product"
import getProducts from "@/lib/server/getProducts"
import ProductGrid from "@/components/ui/ProductGrid"
import Button from "@/components/ui/Button"
import { ChevronRight } from "lucide-react"

export default async function Sections() {
  const [dupatta, saree, dress, topMaterial] = await Promise.all([
    getProducts({ type: "Dupatta", count: 3 }),
    getProducts({ type: "Saree", count: 3 }),
    getProducts({ type: "Dress", count: 3 }),
    getProducts({ type: "Top Material", count: 3 }),
  ])
  return (
    <>
      <Section title={dupatta[0].type} data={dupatta} />
      <Section title={saree[0].type} data={saree} />
      <Section title={dress[0].type} data={dress} />
      <Section title={topMaterial[0].type} data={topMaterial} />
    </>
  )
}
