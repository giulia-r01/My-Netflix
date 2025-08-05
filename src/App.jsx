import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./index.css"
import MyNavbar from "./components/MyNavbar"
import MyFooter from "./components/MyFooter"
import MyMain from "./components/MyMain"
import TvShows from "./components/TvShows"
import MovieDetails from "./components/MovieDetails"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProfilePage from "./components/ProfilePage"
import SettingPage from "./components/SettingPage"
import RecentlyAdded from "./components/RecentlyAdded"
import Movie from "./components/Movie"
import MyList from "./components/MyList"
import NotFound from "./components/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route element={<MyMain />} path="/" />
          <Route element={<TvShows />} path="/tv-shows" />
          <Route element={<MovieDetails />} path="/movie-details/:movieId" />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProfilePage />} path="/profile" />
          <Route element={<SettingPage />} path="/settings" />
          <Route element={<RecentlyAdded />} path="/recentlyAdded" />
          <Route element={<Movie />} path="/movies" />
          <Route element={<MyList />} path="/myList" />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  )
}

export default App
