export default function CarouselLoading() {
  return (
    <div className="grid items-center gap-4 md:grid-cols-2">
      <div className="grid gap-2 *:rounded-md">
        <div className="h-6 w-full animate-pulse bg-red-600/20"></div>
        <div className="h-2 w-full animate-pulse bg-red-600/20"></div>
        <div className="h-2 w-full animate-pulse bg-red-600/20"></div>
        <div className="h-2 w-full animate-pulse bg-red-600/20"></div>
        <div className="h-8 w-28 animate-pulse bg-red-600/20"></div>
      </div>
      <div className="aspect-square w-full max-w-100 animate-pulse rounded-md bg-red-600/20 md:justify-self-end"></div>
    </div>
  )
}
