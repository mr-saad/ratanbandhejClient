import { createClient } from "next-sanity"

const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_apiVersion,
  dataset: process.env.NEXT_PUBLIC_dataset,
  projectId: process.env.NEXT_PUBLIC_projectId,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_sanity_token,
})
export default client
