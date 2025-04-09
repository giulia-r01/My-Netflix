import { Nav, Button } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const MyNavbar = function () {
  const location = useLocation()

  return (
    <>
      <header className="bg-black">
        <Nav
          className="navbar container navbar-expand-lg bg-body-dark bg-black"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <img width="100" src="netflix_logo.png" />
            </Link>
            <Button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={
                      location.pathname === "/home"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      location.pathname === "/tv-shows"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/tv-shows"
                  >
                    Tv Shows
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My List
                  </a>
                </li>
              </ul>
              <div className="d-flex justify-content-around align-items-center">
                <div className="my-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search text-white align-items-center mx-3 mt-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </div>
                <div className="align-items-center mx-3 mt-3">
                  <p className="text-white">KIDS</p>
                </div>
                <div className="align-items-center mx-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell-fill text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                  </svg>
                </div>
                <div className="align-items-center mx-3 mt-1">
                  <ul className="list-unstyled">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle mx-2 mt-2 text-dark"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="avatar.png"
                          width="25"
                          className="mt-2 mb-0"
                        />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Profile page
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Setting page
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Nav>
      </header>
    </>
  )
}
export default MyNavbar
