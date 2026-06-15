import { createClient } from "@sanity/client"
import "server-only"

export default createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: "v2026-06-15",
  useCdn: true,
})
