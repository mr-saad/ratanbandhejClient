import Favourites from "./Favourites"

export const metadata = {
  title: "Favourites",
}

export default function FavouritesPage() {
  return (
    <div>
      <h1 className="heading">Favourites</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-5">
        <Favourites />
      </div>
    </div>
  )
}
