import Button from "@/components/ui/Button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"

function SelectCategory({ categoriesOptions, handleFilter }) {
  const { push } = useRouter()
  return (
    <Select items={categoriesOptions}>
      <SelectTrigger className="border-primary/60 cursor-pointer bg-white dark:bg-black">
        <SelectValue placeholder="Category" className="highlight" />
      </SelectTrigger>
      <SelectContent className="ring-primary/50 bg-white dark:bg-black">
        <SelectItem
          value="All"
          className="focus-visible:ring-primary cursor-pointer focus-visible:ring"
          onClick={() => push("/products")}
        >
          All
        </SelectItem>
        {categoriesOptions.map((c) => (
          <SelectItem
            key={c.value}
            value={c.value}
            className="focus-visible:ring-primary cursor-pointer focus-visible:ring"
            onClick={() => {
              handleFilter({
                category: c.value,
              })
            }}
          >
            {c.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default function FilterPopover({
  categories,
  view,
  searchCategory,
  handleFilter,
}) {
  const categoriesOptions = categories.map((c) => ({ value: c, label: c }))

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
          <SelectCategory
            searchCategory={searchCategory}
            handleFilter={handleFilter}
            categoriesOptions={categoriesOptions}
          />
          {/* <div className={cn("flex flex-wrap gap-1")}>
            {categories.map((category) => {
              return (
                <Button
                  title="Category"
                  variant={"secondary"}
                  key={category}
                  className={cn(
                    "inline-flex cursor-pointer rounded-full px-3 py-1",
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
          </div>*/}
        </div>
        <div className="flex gap-2">
          <Button
            title="Grid View"
            onClick={() => handleFilter({ view: null })}
            variant={view === "list" ? "ghost" : "primary"}
          >
            <LayoutGrid size={18} />
          </Button>
          <Button
            title="List View"
            onClick={() =>
              handleFilter({ view: view === "list" ? null : "list" })
            }
            variant={view === "list" ? "primary" : "ghost"}
          >
            <List size={18} />
          </Button>
        </div>
      </div>
      <div className="lg:hidden">
        <Popover>
          <PopoverTrigger
            render={
              <Button title="Filter Products">
                <SlidersHorizontal size={18} />
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
              <PopoverTitle className={"font-semibold"}>Category</PopoverTitle>
            </PopoverHeader>
            <SelectCategory
              searchCategory={searchCategory}
              handleFilter={handleFilter}
              categoriesOptions={categoriesOptions}
            />
            {/* <div className="relative">
              <div className={cn("flex flex-wrap gap-1")}>
                {categories.map((category) => {
                  return (
                    <Button
                      variant={"secondary"}
                      key={category}
                      className={cn(
                        "cursor-pointer rounded-full px-3 py-1",
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
            </div>*/}
            <PopoverTitle className={"font-semibold"}>View</PopoverTitle>
            <div className="flex gap-2">
              <Button
                onClick={() => handleFilter({ view: null })}
                variant={view === "list" ? "ghost" : "primary"}
              >
                <LayoutGrid size={20} />
              </Button>
              <Button
                onClick={() =>
                  handleFilter({ view: view === "list" ? null : "list" })
                }
                variant={view === "list" ? "primary" : "ghost"}
              >
                <List size={20} />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}
