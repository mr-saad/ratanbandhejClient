import { query } from "@/lib/sanity"
import CatalogueLink from "./CatalogueLink"

export default async function Catalogue() {
  const data = await query(`*[_type=="product"]{type}`)
  const catalogue = [...new Set(data.map(({ type }) => type))]
  return (
    <div>
      {catalogue.map((cat) => (
        <CatalogueLink key={cat} cat={cat} />
      ))}
    </div>
  )
}
