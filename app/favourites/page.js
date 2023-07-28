import Favourites from "./Favourites"

export const metadata = {
  title: "Favourites",
}

export default function FavouritesPage() {
  return (
    <div className="pt-4">
      <h1 className="font-medium text-3xl mb-5 highlight">Favourites</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Favourites />
      </div>
    </div>
  )
}
