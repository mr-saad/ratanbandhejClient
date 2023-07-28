import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_apiVersion,
  dataset: process.env.NEXT_PUBLIC_dataset,
  projectId: process.env.NEXT_PUBLIC_projectId,
  useCdn: true,
})
export default client

const builder = imageUrlBuilder(client)
export function urlFor(src) {
  return builder.image(src).width(500).url()
}
