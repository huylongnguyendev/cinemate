import { ModeToggle } from "@/components/toggles/ModeToggle"
import SearchToggle from "@/components/toggles/SearchToggle"
import SearchBar from "../search/SearchBar"

export default function Interactive() {
  return (
    <>
      <div className="flex items-center gap-4">
        <SearchBar />
        <SearchToggle />
        <ModeToggle />
      </div>
    </>
  )
}
