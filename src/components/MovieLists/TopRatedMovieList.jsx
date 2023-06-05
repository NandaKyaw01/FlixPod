import { useCallback, useEffect, useState } from "react";
import { getMovieList } from "../../utils/api";
import Card from "../basic/Card";
import PaginationLoadMore from "../basic/PaginationLoadMore";
import { Link } from "react-router-dom";
import AppLayout from "../../Layouts/AppLayout";

const PopularMovieList = ({ state }) => {
  const [popularMovieList, setPopularMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  // const [loading, setLoading] = useState(false);

  const fetchMoiveList = async (page) => {
    // setLoading(true);
    const response = await getMovieList(page, "movie/top_rated");
    const data = [...popularMovieList, ...response.results];
    setPopularMovieList(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchMoiveList(pageNumber);
  }, [pageNumber]);

  const loadMoreHandler = () => {
    setPageNumber((pre) => pre + 1);
  };

  return (
    <AppLayout state={state}>
      {/* {loading ? (
        <div>Loading...</div>
      ) : (
        <> */}
      {/* Movie Main Page  */}
      <div className="custom-container">
        <div className="title">Top Rated Movies</div>
        <div className="row">
          {popularMovieList.map((item) => (
            <div
              key={item.id}
              className="col-6 col-md-4 col-lg-3 pe-4 pb-4  grid-card"
            >
              <Link to={`/movie/topratedmovies/${item.id}`}>
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
    </AppLayout>
  );
};

export default PopularMovieList;
