import DragScrollList from "./basic/DragScrollList";
import { useMovie } from "../hooks/useMovie";
import AppLayout from "../Layouts/AppLayout";

const Home = ({ state }) => {
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

  return (
    <AppLayout state={state}>
      {/* Movie Home Page  */}
      <DragScrollList
        movielist={popularMovieList}
        title="Trending Movies"
        link="/movie/popularmovies"
        error={popularMovieError}
        loading={popularMovieLoading}
      />

      <DragScrollList
        movielist={topRatedMovieList}
        title="Top Rated Movies"
        link="/movie/topratedmovies"
        error={topRatedMovieError}
        loading={topRatedMovieLoading}
      />
    </AppLayout>
  );
};

export default Home;
