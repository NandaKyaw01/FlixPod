import { useEffect, useState } from "react";
import { getMovieList } from "../../utils/api";
import Card from "../basic/Card";
import PaginationLoadMore from "../basic/PaginationLoadMore";
import { Link } from "react-router-dom";

const PopularTVList = () => {
  const [topratedTVList, setTopratedTVList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  // const [loading, setLoading] = useState(false);

  const fetchMoiveList = async (page) => {
    // setLoading(true);
    const response = await getMovieList(page, "tv/top_rated");
    const data = [...topratedTVList, ...response.results];
    setTopratedTVList(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchMoiveList(pageNumber);
  }, [pageNumber]);

  const loadMoreHandler = () => {
    setPageNumber((pre) => pre + 1);
  };

  return (
    <>
      {/* Movie Main Page  */}
      <div className="custom-container">
        <div className="title">Top Rated TV Series</div>
        <div className="row">
          {topratedTVList.map((item) => (
            <div
              key={item.id}
              className="col-6 col-md-4 col-lg-3 pe-4 pb-4 grid-card"
            >
              <Link to={`/tv/topratedtv/${item.id}`}>
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
    </>
  );
};

export default PopularTVList;
