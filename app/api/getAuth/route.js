import isAuthenticated from "@/lib/isAuthenticated"

export const GET = async () => {
  const auth = await isAuthenticated()
  return new Response(JSON.stringify(auth))
}
