import MenuToggle from "@/components/toggles/MenuToggle"
import { ModeToggle } from "@/components/toggles/ModeTogle"
import { AlignRight } from "lucide-react"
import SearchBar from "../searchs/SearchBar"
import { Suspense } from "react"

export default function NavInteractive() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Suspense>
          <SearchBar />
        </Suspense>
        <ModeToggle />
        <MenuToggle>
          <AlignRight />
        </MenuToggle>
      </div>
    </>
  )
}
