import { Container } from "react-bootstrap"
import MyMatrix from "./MyMatrix"
import MyAvengers from "./MyAvengers"
import MyHarryPotter from "./MyHarryPotter"
import MyLordOfTheRings from "./MyLordOfTheRings"

const RecentlyAdded = function () {
  return (
    <main className="flex-grow-1">
      <Container className="pt-5">
        <MyAvengers />
        <MyLordOfTheRings />
      </Container>
    </main>
  )
}

export default RecentlyAdded
