import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TVshow from "./components/TVshow";
import Discovery from "./components/Discovery";
import PopularMovieList from "./components/MovieLists/PopularMovieList";
import MovieDetail from "./components/basic/MovieDetail";
import TopRatedMovieList from "./components/MovieLists/TopRatedMovieList";
import PopularTVList from "./components/TVshowLists/PopularTVLIst";
import TopRatedTVList from "./components/TVshowLists/TopRatedTVList";
import TVDetail from "./components/basic/TVDetail";
import AppLayout from "./Layouts/AppLayout";
import RecommandMovieList from "./components/MovieLists/RecommandMovieList";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home state={"home"} />} />
        <Route path="/tv" element={<TVshow state={"home"} />} />
        <Route path="/discovery" element={<Discovery state={"discovery"} />} />
        <Route
          path="/movie/popularmovies"
          element={<PopularMovieList state={"home"} />}
        />
        <Route
          path="/movie/topratedmovies"
          element={<TopRatedMovieList state={"home"} />}
        />
        <Route
          path="/movie/:id/recommandations"
          element={<RecommandMovieList />}
        />

        <Route path="/tv/populartv" element={<PopularTVList />} />
        <Route path="/tv/topratedtv" element={<TopRatedTVList />} />

        <Route
          path="/movie/popularmovies/:id"
          element={<MovieDetail state={"home"} />}
        />
        <Route path="/movie/:id" element={<MovieDetail state={"home"} />} />
        <Route
          path="/movie/topratedmovies/:id"
          element={<MovieDetail state={"home"} />}
        />

        <Route path="/tv/populartv/:id" element={<TVDetail />} />
        <Route path="/tv/topratedtv/:id" element={<TVDetail />} />
      </Routes>
    </>
  );
};

export default App;
