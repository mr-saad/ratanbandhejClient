export default function CarouselLoading() {
  return (
    <div className="grid items-center gap-4 md:grid-cols-2">
      <div className="grid gap-2 *:rounded-md">
        <div className="h-6 w-full animate-pulse bg-gray-200"></div>
        <div className="h-2 w-full animate-pulse bg-gray-200"></div>
        <div className="h-2 w-full animate-pulse bg-gray-200"></div>
        <div className="h-2 w-full animate-pulse bg-gray-200"></div>
        <div className="h-8 w-28 animate-pulse bg-gray-200"></div>
      </div>
      <div className="aspect-square w-full max-w-100 animate-pulse rounded-md bg-gray-200 md:justify-self-end"></div>
    </div>
  )
}
