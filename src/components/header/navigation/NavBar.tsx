import { navList } from "@/lib/data/nav.data"
import NavWrapper from "./NavWrapper"
import Link from "next/link"
import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function NavBar() {
  const data = navList

  return (
    <>
      <NavWrapper>
        <li className="flex justify-between items-center md:hidden">
          <Logo />
          <Button
            variant="outline"
            size="icon-sm"
          >
            <X />
          </Button>
        </li>
        {
          data.map(item => (
            <li
              key={item.title}
              className="px-2 py-1.5 rounded-md transitions hover:bg-muted hover:text-primary active:bg-muted active:text-primary"
            >
              <Link
                href={item.url}
                className="inline-flex md:justify-center items-center gap-1.5 size-full font-semibold"
              >
                {item.title}
              </Link>
            </li>
          ))
        }
      </NavWrapper>
    </>
  )
}
