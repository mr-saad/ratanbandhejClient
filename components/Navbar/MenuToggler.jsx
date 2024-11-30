"use client"

const openNav = () => {
  ;["rotate-45", "translate-y-2"].map((cls) =>
    document.querySelector(".line1").classList.toggle(cls),
  )
  ;["-rotate-45", "-translate-y-[2px]"].map((cls) =>
    document.querySelector(".line2").classList.toggle(cls),
  )
  document.querySelector("nav ul").classList.toggle("hidden")
}

export default function MenuToggler() {
  return (
    <div
      tabIndex={0}
      className={`z-20 flex h-[12px] flex-col justify-between justify-self-start md:hidden`}
      onClick={openNav}
      onKeyUp={(e) => {
        e.preventDefault()
        if (e.key === "Enter") openNav()
      }}
    >
      <span
        className={`line1 h-[2px] w-[26px] origin-center rounded-md bg-white`}
      ></span>
      <span
        className={`line2 h-[2px] w-[26px] origin-center rounded-md bg-white`}
      ></span>
    </div>
  )
}
