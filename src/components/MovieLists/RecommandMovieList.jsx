import { useState } from "react";
import Card from "../basic/Card";
import PaginationLoadMore from "../basic/PaginationLoadMore";
import { Link, useParams } from "react-router-dom";
import { useMovieRecom } from "../../hooks/useMovie";
import removeDuplicate from "../../utils/removeDuplicate";

const RecommandMovieList = () => {
  const { id } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: popularMovieList,
    error: popularMovieError,
    isLoading: popularMovieLoading,
  } = useMovieRecom(id, pageNumber);

  const loadMoreHandler = () => {
    setPageNumber((pre) => pre + 1);
  };

  const filterList = removeDuplicate(popularMovieList);

  return (
    <>
      {/* {loading ? (
        <div>Loading...</div>
      ) : (
        <> */}
      {/* Movie Main Page  */}
      <div className="custom-container">
        <div className="title ">Related Movies</div>
        <div className="row">
          {filterList.map((item) => (
            <div
              key={item.id}
              className="col-6 col-md-4 col-lg-3 pe-4 pb-4 grid-card"
            >
              <Link to={`/movie/${item.id}`}>
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

export default RecommandMovieList;
