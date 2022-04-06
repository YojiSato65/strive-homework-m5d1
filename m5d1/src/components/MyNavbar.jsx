import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Job search engine</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/favorites">Favorites</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default MyNavbar
