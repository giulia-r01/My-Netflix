import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./index.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import MyMain from "./components/MyMain"
import TvShows from "./components/TvShows"
import MovieDetails from "./components/MovieDetails"
import { BrowserRouter, Route, Routes } from "react-router-dom"
//import ProfilePage from "./components/ProfilePage"
//import SettingPage from "./components/SettingPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route element={<MyMain />} path="/home" />
          <Route element={<TvShows />} path="/tv-shows" />
          <Route element={<MovieDetails />} path="/movie-details/:movieId" />
          <Route path="*" element={<h2>404</h2>} />
          {/*<ProfilePage />
      <SettingPage />*/}
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  )
}

export default App
