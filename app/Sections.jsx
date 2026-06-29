import Product from "@/components/ui/Product"
import ProductGrid from "@/components/ui/ProductGrid"
import Button from "@/components/ui/Button"
import { ChevronRight } from "lucide-react"
import sanity from "@/lib/server/sanity"

export default async function Sections() {
  const data = await sanity.fetch(`
   { "sections": [
        {"title":"Saree", "products":*[_type=="product" && type=="Saree"]|order(_createdAt desc)[0..4]{
          _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
        }},
        {"title":"Dupatta", "products":*[_type=="product" && type=="Dupatta"]|order(_createdAt desc)[0..4]{
          _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
        }},
        {"title":"Dress", "products":*[_type=="product" && type=="Dress"]|order(_createdAt desc)[0..4]{
          _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
        }},
        {"title":"Top Material", "products":*[_type=="product" && type=="Top Material"]|order(_createdAt desc)[0..4]{
          _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
        }},
    ]}
    `)
  return (
    <>
      {data.sections.map((section) => (
        <Section key={section.title} {...section} />
      ))}
    </>
  )
}

function Section({ title, products }) {
  return (
    <div className="my-20">
      <div className="mb-5 flex items-center justify-between gap-5">
        <h3 className="heading mb-0! shrink-0">{title}</h3>
        <Button
          variant={"ghost"}
          prefetch={true}
          href={"/products?category=" + title}
        >
          <ChevronRight />
        </Button>
      </div>
      <ProductGrid>
        {products.map((props) => (
          <Product key={props.slug} {...props} />
        ))}
      </ProductGrid>
    </div>
  )
}
