import sanity from "../components/sanity"

export default async function sitemap() {
  const products = await sanity.fetch(
    `*[_type == "product"]{"slug":slug.current,_updatedAt}`
  )

  return [
    {
      url: `https://ratanbandhej.vercel.app`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `https://ratanbandhej.vercel.app/products`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `https://ratanbandhej.vercel.app/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `https://ratanbandhej.vercel.app/contact`,
      lastModified: new Date().toISOString(),
    },
    ...products.map((all) => ({
      url: `https://ratanbandhej.vercel.app/products/${all.slug}`,
      lastModified: all._updatedAt,
    })),
  ]
}
