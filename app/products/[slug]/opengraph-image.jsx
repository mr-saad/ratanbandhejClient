import { ImageResponse } from "next/og"
import { query } from "@/lib/sanity"

export async function generateImageMetadata({ params }) {
  const images = await query(
    `*[slug.current==$slug]{title,"image":images[0].asset->{url}}`,
    {
      slug: (await params).slug,
    },
  )

  return images.map((image, idx) => ({
    id: idx,
    size: { width: 1200, height: 600 },
    alt: image.title,
    contentType: "image/png",
  }))
}

export default async function OGImage({ params }) {
  const product = await query(
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
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        textTransform: "uppercase",
        background: "#100000",
        color: "white",
        fontSize: "4rem",
        position: "relative",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        width={200}
        src={product.image.url}
        alt={product.title}
      />
      <div
        style={{
          display: "flex",

          alignItems: "flex-end",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(transparent,rgba(0,0,0,0.5))",
        }}
      >
        <p
          style={{
            marginBottom: 0,
            textWrap: "balance",
          }}
        >
          {product.title}
        </p>
      </div>
    </div>,
  )
}
