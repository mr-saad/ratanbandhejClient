import isAuthenticated from "@/lib/server/isAuthenticated"

export const GET = async (req) => {
  return Response.json(await isAuthenticated())
}
