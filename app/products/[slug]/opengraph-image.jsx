import { ImageResponse } from "next/og"
import { query } from "@/lib/sanity"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function OGImage({ params }) {
  const product = await query(`*[slug.current==$slug][0]{title}`, {
    slug: (await params).slug,
  })

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
      }}
    >
      <p
        style={{
          textAlign: "center",
          textWrap: "balance",
          fontSize: "2rem",
        }}
      >
        {product.title}
      </p>
      <button
        style={{
          padding: ".5rem 1rem",
          borderRadius: 10,
          background: "linear-gradient(#9f0712, #e7000b)",
        }}
      >
        Explore
      </button>
    </div>,
  )
}
