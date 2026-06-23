import Button from "@/components/ui/Button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import cn from "@/lib/utils/cn"
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react"

export default function FilterPopover({
  categories,
  view,
  searchCategory,
  handleFilter,
}) {
  return (
    <>
      <div className="hidden items-center gap-3 lg:flex">
        <div className="relative grow">
          <input
            title="Search Product"
            id="search"
            name="search"
            placeholder="Search"
            type="text"
            className="input"
            onChange={(e) => {
              setTimeout(() => {
                handleFilter({ search: e.target.value.trim() || null })
              }, 500)
            }}
          />
        </div>
        <div className="relative">
          <div className={cn("flex flex-wrap gap-1")}>
            {categories.map((category) => {
              return (
                <Button
                  title="Category"
                  variant={"secondary"}
                  key={category}
                  className={cn(
                    "grow cursor-pointer rounded-full px-3 py-1",
                    searchCategory === category ? "bg-rose-700 text-white" : "",
                  )}
                  onClick={() => {
                    handleFilter({
                      category: searchCategory === category ? null : category,
                    })
                  }}
                >
                  {category}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            title="Grid View"
            onClick={() => handleFilter({ view: null })}
            variant={view === "list" ? "ghost" : "primary"}
          >
            <LayoutGrid />
          </Button>
          <Button
            title="List View"
            onClick={() =>
              handleFilter({ view: view === "list" ? null : "list" })
            }
            variant={view === "list" ? "primary" : "ghost"}
          >
            <List />
          </Button>
        </div>
      </div>
      <div className="lg:hidden">
        <Popover>
          <PopoverTrigger
            render={
              <Button title="Filter Products">
                <SlidersHorizontal />
              </Button>
            }
          />
          <PopoverContent
            align="start"
            className={
              "bg-white ring-black/5 dark:bg-[#130006] dark:ring-white/20"
            }
          >
            <div className="relative grow">
              <input
                id="search"
                name="search"
                placeholder="Search"
                type="text"
                className="input"
                onChange={(e) => {
                  setTimeout(() => {
                    handleFilter({ search: e.target.value.trim() || null })
                  }, 500)
                }}
              />
            </div>
            <PopoverHeader>
              <PopoverTitle className={"font-semibold"}>Filter</PopoverTitle>
            </PopoverHeader>
            <div className="relative">
              <div className={cn("flex flex-wrap gap-1")}>
                {categories.map((category) => {
                  return (
                    <Button
                      variant={"secondary"}
                      key={category}
                      className={cn(
                        "grow cursor-pointer rounded-full px-3 py-1",
                        searchCategory === category
                          ? "bg-rose-700 text-white"
                          : "",
                      )}
                      onClick={() => {
                        handleFilter({
                          category:
                            searchCategory === category ? null : category,
                        })
                      }}
                    >
                      {category}
                    </Button>
                  )
                })}
              </div>
            </div>
            <PopoverTitle className={"font-semibold"}>View</PopoverTitle>
            <div className="flex gap-2">
              <Button
                onClick={() => handleFilter({ view: null })}
                variant={view === "list" ? "ghost" : "primary"}
              >
                <LayoutGrid />
              </Button>
              <Button
                onClick={() =>
                  handleFilter({ view: view === "list" ? null : "list" })
                }
                variant={view === "list" ? "primary" : "ghost"}
              >
                <List />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}
