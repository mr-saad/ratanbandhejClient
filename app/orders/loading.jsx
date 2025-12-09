export default function OrdersSkeleton() {
  return (
    <div className="Container">
      <h1 className="heading w-fit animate-pulse rounded-md bg-[#111]/20 text-transparent! dark:bg-white/20">
        My Orders
      </h1>
      <div className="grid gap-5 lg:grid-cols-2">
        {Array(4)
          .fill("order")
          .map((order, index, arr) => {
            return (
              <div key={order + index} className="flex gap-4">
                <div className="aspect-square h-20 w-20 animate-pulse self-start rounded-md bg-[#111]/20 sm:h-64 sm:w-64 dark:bg-white/20"></div>
                <div className="w-full max-w-md text-transparent select-none">
                  <p className="h-3 animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20">
                    s
                  </p>
                  <p className="mt-2 h-3 animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20">
                    s
                  </p>
                  <p className="mt-2 h-3 animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20">
                    s
                  </p>
                  <p className="mt-2 h-3 animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20">
                    s
                  </p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
