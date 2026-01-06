import { AlignLeft } from "lucide-react"
import Container from "../Container"
import Logo from "../Logo"
import MenuToggle from "../toggles/MenuToggle"
import Interactive from "./navigation/Interactive"
import NavBar from "./navigation/NavBar"

export default function Header() {
  return (
    <>
      <header className="sticky top-0 py-5 z-50 bg-background">
        <Container>
          <nav className="flex justify-between items-center">
            <MenuToggle>
              <AlignLeft />
            </MenuToggle>
            <Logo />
            <NavBar />
            <Interactive />
          </nav>
        </Container>
      </header>
    </>
  )
}
