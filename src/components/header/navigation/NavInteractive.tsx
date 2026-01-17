import MenuToggle from "@/components/toggles/MenuToggle"
import { ModeToggle } from "@/components/toggles/ModeTogle"
import { AlignRight, SearchIcon } from "lucide-react"
import SearchBar from "../searchs/SearchBar"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
// import NavWhishlist from "./NavWhishlist"

export default function NavInteractive() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Suspense fallback={
          <Button
            variant="outline"
            size="icon"
            className="pointer-events-none opacity-50"
          >
            <SearchIcon />
          </Button>
        }>
          <SearchBar />
        </Suspense>
        {/* <NavWhishlist /> */}
        <ModeToggle />
        <MenuToggle>
          <AlignRight />
        </MenuToggle>
      </div>
    </>
  )
}
