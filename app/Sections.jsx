import Product from "@/components/ui/Product"
import getProducts from "@/lib/getProducts"
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

function Section({ title, data }) {
  return (
    <div className="my-20">
      <div className="mb-5 flex items-center justify-between gap-5">
        <h3 className="heading mb-0! shrink-0">{title}</h3>
        {/* <hr className="w-full border-black/10 dark:border-white/10" /> */}
        <Button prefetch={true} href={"/products?category=" + title}>
          Explore <ChevronRight />
        </Button>
      </div>
      <ProductGrid>
        {data.map((props) => (
          <Product key={props.slug} {...props} />
        ))}
      </ProductGrid>
    </div>
  )
}
