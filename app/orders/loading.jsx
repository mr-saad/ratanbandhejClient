export default function OrdersSkeleton() {
  return (
    <div className="Container">
      <h1 className="heading w-fit animate-pulse rounded-md bg-[#111]/20 !text-transparent dark:bg-white/20">
        My Orders
      </h1>
      <div className="grid gap-10 divide-y dark:divide-white/10">
        {Array(3)
          .fill("order")
          .map((order, index) => {
            return (
              <div
                key={order + index}
                className="flex gap-4 pt-10 first-of-type:pt-0"
              >
                <div className="aspect-square h-20 w-20 animate-pulse self-start rounded-md bg-[#111]/20 dark:bg-white/20 sm:h-[256px] sm:w-[256px]"></div>
                <div className="w-full max-w-md select-none text-transparent">
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
