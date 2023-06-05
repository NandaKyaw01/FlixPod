import { useEffect, useState } from "react";
import { getMovieList } from "../utils/api";
import DragScrollList from "./basic/DragScrollList";
import AppLayout from "../Layouts/AppLayout";
import Loading from "./basic/Loading";

const Home = ({ state }) => {
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
      <AppLayout state={state}>
        {loading ? (
          <Loading />
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
      </AppLayout>
    </>
  );
};

export default Home;
