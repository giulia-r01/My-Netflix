import { Component } from "react"
import { Button } from "react-bootstrap"
import MyStarWars from "./MyStarWars"
import MyLordOfTheRings from "./MyLordOfTheRings"
import MyJurassicPark from "./MyJurassicPark"

class TvShows extends Component {
  render() {
    return (
      <main className="flex-grow-1">
        <section className="container">
          <div className="row">
            <div className="col-5 col-md-4 col-lg-3 col-xl-3">
              <h1>TV Shows</h1>
            </div>
            <div className="col-4 col-md-4 col-lg-7 col-xl-7 py-md-2">
              <div className="dropdown">
                <Button
                  variant="black"
                  className="btn btn-black border border-white text-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </Button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#">
                      Anime
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Horror
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fantasy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 col-md-4 col-lg-2 col-xl-2 text-md-end py-md-2">
              <div className="btn-group me-2" role="group">
                <Button
                  variant="black"
                  type="button"
                  className="btn btn-black text-white border border-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-justify-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </Button>
                <Button
                  type="button"
                  variant="black"
                  className="btn btn-black text-white border border-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-grid-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <h3 className="pt-3">Trending now</h3>
          <MyStarWars />
          <MyLordOfTheRings />
          <MyJurassicPark />
        </section>
      </main>
    )
  }
}

export default TvShows
