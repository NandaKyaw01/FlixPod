import { useEffect, useState } from "react";
import { getMovieList } from "../utils/api";
import DragScrollList from "./basic/DragScrollList";

const Home = () => {
  const [popularTVList, setPopularTVList] = useState([]);
  const [topratedTVList, setTopratedTVList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPopularMoiveList = async () => {
    const response = await getMovieList(1, "tv/popular");
    setPopularTVList(response.results);
  };

  const fetchTopRatedMoiveList = async () => {
    const response = await getMovieList(1, "tv/top_rated");
    setTopratedTVList(response.results);
  };

  useEffect(() => {
    fetchPopularMoiveList();
    fetchTopRatedMoiveList();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* Movie Home Page  */}
          <DragScrollList
            movielist={popularTVList}
            title="Trending TV series"
            link="/tv/populartv"
          />
          <DragScrollList
            movielist={topratedTVList}
            title="Top Rated series"
            link="/tv/topratedtv"
          />
        </>
      )}
    </>
  );
};

export default Home;
