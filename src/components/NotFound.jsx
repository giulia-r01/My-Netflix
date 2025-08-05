import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const NotFound = function () {
  return (
    <Container>
      <Row className="justify-content-center  mx-1">
        <Col md={8} className="text-white text-center rounded my-5 py-4">
          <h1>404</h1>
          <p>🙈 Ops... Questa pagina non esiste più!</p>
          <p>Niente panico, torna alla home</p>
          <Link to="/">
            <Button variant="dark" className="mt-3">
              Torna alla Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
