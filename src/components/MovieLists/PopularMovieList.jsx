import { useEffect, useState } from "react";
import { getMovieList } from "../../utils/api";
import Card from "../basic/Card";
import PaginationLoadMore from "../basic/PaginationLoadMore";
import { Link } from "react-router-dom";
import { useMovie } from "../../hooks/useMovie";

const PopularMovieList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: popularMovieList,
    error: popularMovieError,
    isLoading: popularMovieLoading,
  } = useMovie("popular", pageNumber);

  const loadMoreHandler = () => {
    setPageNumber((pre) => pre + 1);
  };

  return (
    <>
      {/* {loading ? (
        <div>Loading...</div>
      ) : (
        <> */}
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
        <PaginationLoadMore clickEvent={loadMoreHandler} />
      </div>
      {/* </>
      )} */}
    </>
  );
};

export default PopularMovieList;
