import { query } from "./sanity"

export const getHeaderImage = async (ms) => {
  try {
    const res = await query(
      `*[_type=="headerImage"][0]{image{asset->{path,metadata{lqip}}}}`,
      null,
      ms,
    )
    return res
  } catch (error) {
    console.error(error)
    return ""
  }
}
