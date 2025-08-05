import { useEffect, useState } from "react"
import { Alert, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"

const URL = "https://www.omdbapi.com/?apikey=f3eecf10&s=Jurassic%20park"

const MyJurassicPark = function () {
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
    <div className="row g-3 pt-5">
      <h4>
        <em>
          Dio crea i dinosauri. Dio distrugge i dinosauri. Dio crea l’uomo.
          L’uomo distrugge Dio. L’uomo crea i dinosauri. I dinosauri mangiano
          l’uomo. La donna eredita la terra.
        </em>
      </h4>
      {isLoading && (
        <div className="text-center my-3">
          <Spinner variant="danger" animation="border" />
        </div>
      )}
      {isError && (
        <Alert variant="danger" className="text-center">
          <img src="jurassic.svg" width="25" />
          ...Il T-rex si è mangiato i dati?! Qualcosa è andato storto durante il
          recupero!
        </Alert>
      )}
      {films?.slice(0, 4).map((film, i) => (
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

export default MyJurassicPark
