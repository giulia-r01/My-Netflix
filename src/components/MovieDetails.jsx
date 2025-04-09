import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner, Alert, Card, Container, Row, Col } from "react-bootstrap"

const MovieDetails = function () {
  const { movieId } = useParams()

  const [movieDetails, setMovieDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(
    function () {
      const URL = "https://www.omdbapi.com/?apikey=f3eecf10&i=" + movieId

      fetch(URL)
        .then(function (response) {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error("Errore nel recupero dettagli film")
          }
        })
        .then(function (data) {
          setMovieDetails(data)
          setIsLoading(false)
        })
        .catch(function (error) {
          console.error("Errore nella fetch:", error)
          setIsError(true)
          setIsLoading(false)
        })
    },
    [movieId]
  )

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="pt-4" xs={8} md={6} lg={4}>
          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {isError && (
            <Alert variant="danger" className="text-center">
              Non siamo riusciti a recuperare il dettaglio del film.
            </Alert>
          )}

          {!isLoading && !isError && movieDetails && (
            <Card className="mb-4 mx-auto">
              <Card.Img variant="top" src={movieDetails.Poster} />

              <Card.Body>
                <Card.Title>{movieDetails.Title}</Card.Title>
                <Card.Text>{movieDetails.Plot}</Card.Text>
                <p>
                  <strong>Year:</strong> {movieDetails.Year}
                </p>
                <p>
                  <strong>Genre:</strong> {movieDetails.Genre}
                </p>
                <p>
                  <strong>Director:</strong> {movieDetails.Director}
                </p>
                <p>
                  <strong>Rating:</strong> {movieDetails.imdbRating}
                </p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
