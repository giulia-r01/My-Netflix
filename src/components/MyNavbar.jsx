import { useState } from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const MyNavbar = () => {
  const location = useLocation()
  const [expanded, setExpanded] = useState(false)

  const closeMenu = () => setExpanded(false)

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
          <img width="100" src="netflix_logo.png" alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === "/"}
              onClick={closeMenu}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/tv-shows"
              active={location.pathname === "/tv-shows"}
              onClick={closeMenu}
            >
              Tv Shows
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/movies"
              active={location.pathname === "/movies"}
              onClick={closeMenu}
            >
              Movies
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/recentlyAdded"
              active={location.pathname === "/recentlyAdded"}
              onClick={closeMenu}
            >
              Recently Added
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/myList"
              active={location.pathname === "/myList"}
              onClick={closeMenu}
            >
              My List
            </Nav.Link>
          </Nav>

          <div className="d-flex justify-content-center gap-3">
            <div className="text-white mx-3">KIDS</div>
            <Nav.Link href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Nav.Link>

            <Nav.Link href="#" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </Nav.Link>

            <NavDropdown
              title={
                <img
                  src="avatar.png"
                  width="25"
                  alt="Avatar"
                  className="rounded-circle"
                />
              }
              id="basic-nav-dropdown"
              align="end"
              onSelect={closeMenu}
            >
              <NavDropdown.Item as={Link} to="/profile" onClick={closeMenu}>
                Profile page
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings" onClick={closeMenu}>
                Setting page
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
