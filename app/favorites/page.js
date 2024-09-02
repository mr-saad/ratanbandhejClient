import Favorites from "./Favorites"

export const metadata = {
  title: "Favorites",
}

export default function FavoritesPage() {
  return (
    <div className="Container">
      <h1 className="heading">Favorites</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-5">
        <Favorites />
      </div>
    </div>
  )
}
