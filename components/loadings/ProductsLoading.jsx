export default function ProductsLoading() {
  return (
    <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(1)
        .map((item, index) => (
          <div
            key={index}
            className="aspect-square max-w-[400px] animate-pulse rounded-md bg-red-800/20 dark:bg-white/20"
          ></div>
        ))}
    </div>
  )
}
