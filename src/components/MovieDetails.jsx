/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  Spinner,
  Alert,
  Card,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap"

const MovieDetails = function () {
  const { movieId } = useParams()
  const navigate = useNavigate()

  const [movieDetails, setMovieDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!movieId) {
      navigate("/404")
      return
    }

    const detailsURL = "https://www.omdbapi.com/?apikey=f3eecf10&i=" + movieId

    fetch(detailsURL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dettagli film")
        }
      })
      .then((data) => {
        if (!data || !data.Title) {
          navigate("/404")
          return
        }
        setMovieDetails(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Errore nella fetch:", error)
        setIsError(true)
        setIsLoading(false)
      })
  }, [movieId])

  return (
    <Container>
      <Row className="justify-content-center">
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
          <>
            <Col className="pt-4" xs={12} md={8}>
              <h3 className="mb-3 text-center">Dettagli</h3>
              <Card className="d-flex flex-column flex-md-row mb-2 mx-auto align-items-center">
                <Card.Img variant="left" src={movieDetails.Poster} />

                <Card.Body className="ms-md-2 mt-0 pt-md-0">
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
            </Col>
          </>
        )}
      </Row>
    </Container>
  )
}

export default MovieDetails
