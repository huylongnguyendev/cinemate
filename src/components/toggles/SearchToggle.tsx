import { Search } from "lucide-react"
import { Button } from "../ui/button"

export default function SearchToggle() {
  return (
    <>
      <Button variant="ghost" size="icon">
        <Search />
      </Button>
    </>
  )
}
