import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Job search engine</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </Nav>
    </Navbar>
  )
}

export default MyNavbar
