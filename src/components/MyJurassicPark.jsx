import { Component } from "react"
import { Alert, Spinner } from "react-bootstrap"

const URL = "https://www.omdbapi.com/?apikey=f3eecf10&s=Jurassic%20park"

class MyJurassicPark extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  }

  getFilms = () => {
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
        this.setState({ films: data.Search, isLoading: false })
      })
      .catch((err) => {
        console.log("Errore", err)
        this.setState({ isLoading: false, isError: true })
      })
  }

  componentDidMount = () => {
    this.getFilms()
  }

  render() {
    return (
      <div className="row g-3 pt-5">
        <h4>
          <em>
            Dio crea i dinosauri. Dio distrugge i dinosauri. Dio crea l’uomo.
            L’uomo distrugge Dio. L’uomo crea i dinosauri. I dinosauri mangiano
            l’uomo. La donna eredita la terra.
          </em>
        </h4>
        {this.state.isLoading && (
          <div className="text-center my-3">
            <Spinner variant="danger" animation="border" />
          </div>
        )}
        {this.state.isError && (
          <Alert variant="danger" className="text-center">
            <img src="jurassic.svg" width="25" />
            ...Il T-rex si è mangiato i dati?! Qualcosa è andato storto durante
            il recupero!
          </Alert>
        )}
        {this.state.films.slice(0, 6).map((film, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-2">
            <img
              className="img-fluid img-hover-zoom same-height"
              src={film.Poster}
              alt={film.Title}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default MyJurassicPark
