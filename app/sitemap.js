import sanity from "../lib/sanity"

export default async function sitemap() {
  const products = await sanity.fetch(
    `*[_type == "product"]{"slug":slug.current,_updatedAt}`,
  )

  return [
    {
      url: `https://ratanbandhej.shop/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `https://ratanbandhej.shop/products`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `https://ratanbandhej.shop/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `https://ratanbandhej.shop/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...products.map((all) => ({
      url: `https://ratanbandhej.shop/products/${all.slug}`,
      lastModified: all._updatedAt,
      changeFrequency: "daily",
      priority: 0.9,
    })),
  ]
}
