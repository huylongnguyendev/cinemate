import { navList } from "@/lib/data/nav.data"
import NavWrapper from "./NavWrapper"
import Link from "next/link"
import Logo from "@/components/Logo"
import { X } from "lucide-react"
import MenuToggle from "@/components/toggles/MenuToggle"
import NavItem from "./NavItem"

export default function NavBar() {
  const data = navList

  return (
    <>
      <NavWrapper>
        <li className="flex justify-between items-center md:hidden">
          <Logo />
          <MenuToggle>
            <X />
          </MenuToggle>
        </li>
        {
          data.map(item => (
            <NavItem key={item.title}>
              <Link
                href={item.url}
                className="inline-flex md:justify-center items-center gap-1.5 size-full font-semibold"
              >
                {item.title}
              </Link>
            </NavItem>
          ))
        }
      </NavWrapper>
    </>
  )
}
