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

  const [comments, setComments] = useState([])
  const [isLoadingComments, setIsLoadingComments] = useState(true)
  const [isErrorComments, setIsErrorComments] = useState(false)

  useEffect(() => {
    if (!movieId) {
      navigate("/404")
      return
    }

    const detailsURL = "https://www.omdbapi.com/?apikey=f3eecf10&i=" + movieId
    const commentsURL =
      "https://striveschool-api.herokuapp.com/api/comments/" + movieId

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
          // Se l'API non restituisce un film valido
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

    fetch(commentsURL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMWU5YTM4MzRiZjAwMTUwMDA2ZjEiLCJpYXQiOjE3NDQyMTA1NTMsImV4cCI6MTc0NTQyMDE1M30.CXWHzuCgzGZ9nReVzPNHBh-Ef3bKe-xwiIwQH1Gndoo",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero dei commenti")
        }
      })
      .then((data) => {
        console.log(data)
        setComments(data)
        setIsLoadingComments(false)
      })
      .catch((err) => {
        console.log("errore nella fetch")
        setIsLoadingComments(false)
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
            {/* Card orizzontale su desktop, verticale su mobile */}
            <Col className="pt-4" xs={12} md={8}>
              <h3 className="mb-3 text-center">Dettagli</h3>
              <Card className="d-flex flex-column flex-md-row mb-2 mx-auto align-items-center">
                {/* Immagine */}
                <Card.Img variant="left" src={movieDetails.Poster} />

                {/* Corpo della Card */}
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

            {/* Commenti sotto */}
            {!isLoadingComments &&
              !isErrorComments &&
              comments &&
              comments.length > 0 && (
                <Col className="pt-4" xs={12} md={4}>
                  <h3 className="mb-3 text-center">Commenti</h3>
                  <ListGroup>
                    {comments.map((comment, index) => (
                      <ListGroup.Item key={index} className="mb-3">
                        <strong>Author:</strong> {comment.author}
                        <br />
                        <strong>Comment:</strong> {comment.comment}
                        <br />
                        <strong>Rate:</strong> {comment.rate}/5
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              )}
            {!isLoadingComments && comments && comments.length === 0 && (
              <Col className="pt-4" xs={12} md={4}>
                <h3 className="mb-3 text-center">Commenti</h3>
                <Alert variant="danger" className="text-center">
                  Nessun commento trovato.
                </Alert>
              </Col>
            )}
          </>
        )}
      </Row>
    </Container>
  )
}

export default MovieDetails
