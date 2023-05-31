import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast, getMovie } from "../../utils/api";
import CastList from "./CastList";

const TVDetail = () => {
  const { id } = useParams();
  const [tvDescription, setTvDescription] = useState({});
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovie = async () => {
    setLoading(true);
    const response = await getMovie(id, "tv");
    setTvDescription(response);
    fetchCast();
    setLoading(false);
  };

  const fetchCast = async () => {
    const response = await getCast(id, "tv");
    setCast(response.cast);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const fullYear = (date) => {
    const d = new Date(date);
    return d.getFullYear();
  };

  const fullDate = (date) => {
    const a = new Date(date);
    const month = ("0" + (a.getMonth() + 1)).slice(-2);
    const day = ("0" + a.getDate()).slice(-2);
    return day + "/" + month + "/" + a.getFullYear();
  };

  const fulltime = (min) => {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return hours + "h " + minutes + "m";
  };
  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          <div
            className="detail-background"
            style={{
              backgroundImage: `url(
              "https://image.tmdb.org/t/p/w1280/${tvDescription.backdrop_path}"
            )`,
            }}
          >
            <div className="detail-backdrop">
              <div className="detail-container">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-3">
                    <img
                      width="100%"
                      src={`https://image.tmdb.org/t/p/w300/${tvDescription.poster_path}`}
                    />
                  </div>
                  <div className="col-sm-8 col-md-8 col-lg-9 detail-text">
                    <div className="detail-title">
                      {tvDescription.name}
                      <span> ({fullYear(tvDescription.first_air_date)})</span>
                    </div>
                    <div className="detail-sub">
                      <span>
                        {fullDate(tvDescription.first_air_date)}(
                        {tvDescription.original_language}){" "}
                      </span>
                      -
                      {tvDescription.genres.map((item) => (
                        <span key={item.id}> {item.name} , </span>
                      ))}
                      {/* -<span> {fulltime(tvDescription.runtime)}</span> */}
                    </div>

                    <div className="detail-overview">Overview</div>
                    <div>{tvDescription.overview}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CastList cast={cast} />
          </div>
        </>
      )}
    </>
  );
};

export default TVDetail;
