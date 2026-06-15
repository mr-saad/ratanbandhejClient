import { ImageResponse } from "next/og"
import sanity from "@/lib/server/sanity"

export async function generateImageMetadata({ params }) {
  const images = await sanity.fetch(
    `*[slug.current==$slug]{title,"image":images[0].asset->{url}}`,
    {
      slug: (await params).slug,
    },
  )

  return images.map((image, idx) => ({
    id: "og" + idx,
    size: { width: 1200, height: 630 },
    alt: image.title,
    contentType: "image/png",
  }))
}

export default async function OGImage({ params }) {
  const product = await sanity.fetch(
    `*[slug.current==$slug][0]{title,"image":images[0].asset->{url}}`,
    {
      slug: (await params).slug,
    },
  )

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "0 2rem",
        gap: "2rem",
        alignItems: "center",
        textTransform: "uppercase",
        fontSize: "4rem",
      }}
    >
      <img
        style={{
          width: 300,
          objectFit: "cover",
          borderRadius: 12,
          boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
        }}
        width={200}
        src={product.image.url}
        alt={product.title}
      />

      <p
        style={{
          marginBlock: 0,
        }}
      >
        {product.title}
      </p>
    </div>,
  )
}
