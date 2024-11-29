export default function CarouselLoading() {
  return (
    <div className="grid items-center gap-4 md:grid-cols-2">
      <div className="grid gap-2 *:rounded-md">
        <div className="h-6 w-full animate-pulse bg-white/20"></div>
        <div className="h-2 w-full animate-pulse bg-white/20"></div>
        <div className="h-2 w-full animate-pulse bg-white/20"></div>
        <div className="h-2 w-full animate-pulse bg-white/20"></div>
        <div className="h-8 w-28 animate-pulse bg-white/20"></div>
      </div>
      <div className="aspect-square w-full max-w-[400px] animate-pulse rounded-md bg-white/20 md:justify-self-end"></div>
    </div>
  )
}
