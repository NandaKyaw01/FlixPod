import DragScrollList from "./basic/DragScrollList";
import { useMovie } from "../hooks/useMovie";
import AppLayout from "../Layouts/AppLayout";
import { useEffect, useState } from "react";
import Loading from "./basic/Loading";

const Home = ({ state }) => {
  const [loading, setLoading] = useState(true);
  const {
    data: popularMovieList,
    error: popularMovieError,
    isLoading: popularMovieLoading,
  } = useMovie("popular");
  const {
    data: topRatedMovieList,
    error: topRatedMovieError,
    isLoading: topRatedMovieLoading,
  } = useMovie("top_rated");

  useEffect(() => {
    if (popularMovieLoading === false && topRatedMovieLoading === false) {
      setLoading(false);
    }
  }, [popularMovieLoading, topRatedMovieLoading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <AppLayout state={state}>
          {/* Movie Home Page  */}

          <DragScrollList
            movielist={popularMovieList.results}
            title="Trending Movies"
            link="/movie/popularmovies"
            error={popularMovieError}
          />

          <DragScrollList
            movielist={topRatedMovieList.results}
            title="Top Rated Movies"
            link="/movie/topratedmovies"
            error={topRatedMovieError}
          />
        </AppLayout>
      )}
    </>
  );
};

export default Home;
