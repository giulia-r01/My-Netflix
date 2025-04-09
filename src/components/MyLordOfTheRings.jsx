import { useEffect, useState } from "react"
import { Alert, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

const URL = "https://www.omdbapi.com/?apikey=f3eecf10&s=Lord%20of%20The%20Rings"

const MyLordOfTheRings = function () {
  // state = {
  //   films: [],
  //   isLoading: true,
  //   isError: false,
  // }

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
        //this.setState({ films: data.Search, isLoading: false })
        setFilms(data.Search)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("Errore", err)
        //this.setState({ isLoading: false, isError: true })
        setIsLoading(false)
        setIsError(true)
      })
  }

  useEffect(() => {
    getFilms()
  }, [])

  return (
    <div className="row g-3 pt-5">
      <h4>
        <em>
          Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli
          e nel buio incatenarli
        </em>
      </h4>
      {isLoading && (
        <div className="text-center my-3">
          <Spinner variant="danger" animation="border" />
        </div>
      )}

      {isError && (
        <Alert variant="danger" className="text-center">
          <em>Tessssssoro</em> Qualcosa è andato storto nel recupero dati!
          <img src="gollum.svg" width="35" />
        </Alert>
      )}

      {films?.slice(0, 6).map((film, i) => (
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

export default MyLordOfTheRings
