import isAuthenticated from "@/lib/server/isAuthenticated"

export const GET = async () => {
  return Response.json(await isAuthenticated())
}
