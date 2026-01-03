import Container from "../Container"
import Logo from "../Logo"
import Interactive from "./navigation/Interactive"
import NavBar from "./navigation/NavBar"

export default function Header() {
  return (
    <>
      <header className="py-5">
        <Container>
          <nav className="flex justify-between items-center">
            <Logo />
            <NavBar />
            <Interactive />
          </nav>
        </Container>
      </header>
    </>
  )
}
