import Navbar from "./Navbar"
import isAuthenticated from "@/lib/isAuthenticated"

export default async function NavWrapper() {
  const auth = await isAuthenticated()
  return <Navbar auth={auth} />
}
