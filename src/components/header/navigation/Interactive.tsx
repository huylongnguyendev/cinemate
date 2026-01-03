import { ModeToggle } from "@/components/toggles/ModeToggle"
import SearchToggle from "@/components/toggles/SearchToggle"

export default function Interactive() {
  return (
    <>
      <div className="flex items-center gap-4">
        <SearchToggle />
        <ModeToggle />
      </div>
    </>
  )
}
