import { useEffect, useState } from "react"
import { Alert, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

const URL = "https://www.omdbapi.com/?apikey=f3eecf10&s=Matrix"

const MyMatrix = function () {
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
    <div className="row g-3 pt-2">
      {isLoading && (
        <div className="text-center my-3">
          <Spinner variant="danger" animation="border" />
        </div>
      )}

      {isError && (
        <Alert variant="danger" className="text-center">
          <em>Neo</em> Secondo l'Oracolo qualcosa è andato storto nel recupero
          dati!
        </Alert>
      )}

      {films?.slice(0, 1).map((film, i) => (
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
  )
}
export default MyMatrix
