import { useEffect, useState } from "react"
import { Alert, Card, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

const URL = "https://www.omdbapi.com/?apikey=f3eecf10&s=night"

const Movie = ({ isFullScreen }) => {
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getFilms = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("la chiamata non è andata a buon fine")
        }
      })
      .then((data) => {
        console.log("presi!", data)
        setFilms(data.Search)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("Errore", err)
        setIsLoading(false)
        setIsError(true)
      })
  }

  useEffect(() => {
    getFilms()
  }, [])

  return (
    <>
      {isLoading && (
        <div className="text-center my-3">
          <Spinner variant="danger" animation="border" />
        </div>
      )}

      {isError && (
        <Alert variant="danger" className="text-center">
          Qualcosa è andato storto nel recupero dati!
        </Alert>
      )}

      {isFullScreen ? (
        <div
          id="movieCarousel"
          className="carousel slide pt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {films?.slice(0, 10).map((film, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <Link to={`/movie-details/${film.imdbID}`}>
                  <img
                    src={film.Poster}
                    className="d-block w-100"
                    alt={film.Title}
                    style={{ maxHeight: "100vh", objectFit: "contain" }}
                  />
                </Link>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#movieCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#movieCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ) : (
        <div className="container pt-5">
          <h4 className="pt-5">Film aggiunti di recente:</h4>
          <div className="row g-3 pt-4">
            {films?.slice(0, 10).map((film, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-2">
                <Link to={"/movie-details/" + film.imdbID}>
                  <img
                    className="img-fluid img-hover-zoom same-height"
                    src={film.Poster}
                    alt={film.Title}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Movie
