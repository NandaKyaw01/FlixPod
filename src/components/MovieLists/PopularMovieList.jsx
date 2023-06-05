import { useEffect, useState } from "react";
import Card from "../basic/Card";
import { Link } from "react-router-dom";
import { useMovieList } from "../../hooks/useMovie";
import { throttle } from "../../utils/throttle";

const PopularMovieList = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    data: popularMovieList,
    error: popularMovieError,
    isLoading: popularMovieLoading,
  } = useMovieList("popular", pageNumber);

  const expensiveCalculation = throttle(() => {
    handleScroll();
  }, 500);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      popularMovieLoading
    ) {
      return;
    }
    setPageNumber((pre) => pre + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", expensiveCalculation);
    return () => window.removeEventListener("scroll", expensiveCalculation);
  }, [popularMovieLoading]);

  if (popularMovieError) return <div>{popularMovieError}</div>;

  return (
    <>
      {/* Movie Main Page  */}
      <div className="custom-container">
        <div className="title ">Trending Movies</div>
        <div className="row">
          {popularMovieList.map((item) => (
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
          ))}
        </div>

        {popularMovieLoading && (
          <div style={{ fontSize: "60px", color: "white" }}>Loading...</div>
        )}
        {/* <PaginationLoadMore clickEvent={loadMoreHandler} /> */}
      </div>
    </>
  );
};

export default PopularMovieList;
