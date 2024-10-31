"use server"
const sanityToken = process.env.sanity_token
const queryUrl = process.env.queryUrl
const mutateUrl = process.env.mutateUrl

export const query = async (q = "", p = {}) => {
  let params = ""
  if (p) {
    for (const key in p) {
      params += `&$${key}=${key === "count" ? p[key] : `"${p[key]}"`}`
    }
  }
  const res = await (
    await fetch(queryUrl + `?query=${encodeURIComponent(q)}${params}`, {
      headers: { Authorization: `Bearer ${sanityToken}` },
    })
  ).json()
  if (res?.error) {
    throw new Error(res?.message || res?.error.description)
  }
  return res.result
}
export const mutate = async (mutations = []) => {
  const res = await (
    await fetch(mutateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sanityToken}`,
      },
      body: JSON.stringify({ mutations }),
    })
  ).json()
  if (!res?.transactionId) {
    throw new Error(res?.message || res?.error.description)
  }
  return res
}
