import { createClient } from "next-sanity"
import imgBuilder from "@sanity/image-url"

const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_apiVersion,
  dataset: process.env.NEXT_PUBLIC_dataset,
  projectId: process.env.NEXT_PUBLIC_projectId,
  useCdn: false,
  token: process.env.sanity_token,
})
export default client

const builder = imgBuilder(client)
export const urlFor = (source) => {
  return builder.image(source)
}
