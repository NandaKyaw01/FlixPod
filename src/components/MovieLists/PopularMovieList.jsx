import { useCallback, useEffect, useRef, useState } from "react";
import Card from "../basic/Card";
import { Link } from "react-router-dom";
import { useMovieList } from "../../hooks/useMovie";
import { throttle } from "../../utils/throttle";
import AppLayout from "../../Layouts/AppLayout";
import Loadingv2 from "../basic/Loadingv2";

const PopularMovieList = ({ state }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    data: popularMovieList,
    error: popularMovieError,
    isLoading: popularMovieLoading,
  } = useMovieList("popular", pageNumber);

  const observer = useRef();
  const lastmovieRef = useCallback(
    (node) => {
      if (popularMovieLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          expensiveCalculation();
        }
      });
      if (node) observer.current.observe(node);
    },
    [popularMovieLoading]
  );

  const expensiveCalculation = throttle(() => {
    handleScroll();
  }, 500);

  const handleScroll = () => {
    setPageNumber((pre) => pre + 1);
  };

  if (popularMovieError) return <div>{popularMovieError}</div>;

  return (
    <AppLayout state={state}>
      {/* Movie Main Page  */}
      <div className="custom-container">
        <div className="title ">Trending Movies</div>
        <div className="row">
          {popularMovieList.map((item, index) => {
            if (popularMovieList.length === index + 1) {
              return (
                <div
                  ref={lastmovieRef}
                  key={item.id}
                  className="col-6 col-md-4 col-lg-3 pe-4 pb-4 grid-card"
                >
                  <Link to={`/movie/popularmovies/${item.id}`}>
                    <Card
                      movieName={item.title}
                      movieImage={item.poster_path}
                      releaseDate={item.release_date}
                      imdb={item.vote_average}
                    />
                  </Link>
                </div>
              );
            } else {
              return (
                <div
                  key={item.id}
                  className="col-6 col-md-4 col-lg-3 pe-4 pb-4 grid-card"
                >
                  <Link to={`/movie/popularmovies/${item.id}`}>
                    <Card
                      movieName={item.title}
                      movieImage={item.poster_path}
                      releaseDate={item.release_date}
                      imdb={item.vote_average}
                    />
                  </Link>
                </div>
              );
            }
          })}
        </div>

        {!popularMovieLoading && (
          <div style={{ textAlign: "center" }}>
            <Loadingv2 />
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default PopularMovieList;
