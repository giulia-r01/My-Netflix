import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./index.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import MyMain from "./components/MyMain"
//import ProfilePage from "./components/ProfilePage"
import SettingPage from "./components/SettingPage"

function App() {
  return (
    <>
      <MyNavbar />
      <MyMain />
      {/*<ProfilePage />
      <SettingPage />*/}
      <MyFooter />
    </>
  )
}

export default App
