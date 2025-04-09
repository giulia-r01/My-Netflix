import { Button, Container } from "react-bootstrap"
import MyStarWars from "./MyStarWars"
import MyLordOfTheRings from "./MyLordOfTheRings"
import MyJurassicPark from "./MyJurassicPark"

const MyMain = function () {
  return (
    <main className="flex-grow-1">
      <Container fluid className="px-0 mx-0">
        <h2 className="text-center pt-3">Benvenuto su Netflix!</h2>
      </Container>
    </main>
  )
}

export default MyMain
