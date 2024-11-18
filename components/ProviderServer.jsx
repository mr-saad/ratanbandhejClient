import { getCart } from "@/lib/getCart"
import Provider from "./Provider"
import isAuthenticated from "@/lib/isAuthenticated"

export default async function ProviderServer({ children }) {
  const auth = await isAuthenticated()
  const cart = await getCart()

  return (
    <Provider cartLayout={cart} auth={auth}>
      {children}
    </Provider>
  )
}
