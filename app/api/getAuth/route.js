import isAuthenticated from "@/lib/isAuthenticated"

export const GET = async () => {
  return Response.json(await isAuthenticated())
}
