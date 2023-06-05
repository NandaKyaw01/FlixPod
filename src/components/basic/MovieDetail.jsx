import { useParams } from "react-router-dom";
import {
  useMovieDetail,
  useMovieCast,
  useMovieRecom,
  useMoviePhotos,
} from "../../hooks/useMovie";
import CastList from "./CastList";
import DragScrollList from "./DragScrollList";
import removeDuplicate from "../../utils/removeDuplicate";
import PhotoGallery from "./PhotoGallery";
import DirectorList from "./DirectorList";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const MovieDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const {
    data: movie,
    error: movieError,
    isLoading: movieLoading,
  } = useMovieDetail(id);

  const {
    data: cast,
    error: castError,
    isLoading: castLoading,
  } = useMovieCast(id);

  const {
    data: photos,
    error: photosError,
    isLoading: photoLoading,
  } = useMoviePhotos(id);

  const {
    data: recommendations,
    error: recommendationsError,
    isLoading: recommendationsLoading,
  } = useMovieRecom(id, 1);

  useEffect(() => {
    if (
      movieLoading === false &&
      castLoading === false &&
      photoLoading === false &&
      recommendationsLoading === false
    ) {
      setLoading(false);
    }
  }, [movieLoading, castLoading, photoLoading, recommendationsLoading]);

  const filterJob = (arr) => {
    const job = arr.filter(
      (item) => item.job === "Director" || item.job === "Producer"
    );
    const ids = job.map(({ id }) => id);
    const result = job.filter(({ id }, index) => !ids.includes(id, index + 1));
    return result;
  };

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

  if (movieError) return <div>{movieError}</div>;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className="detail-background"
            style={{
              backgroundImage: `url(
            "https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}"
          )`,
            }}
          >
            <div className="detail-backdrop">
              <div className="detail-container">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-3">
                    <img
                      width="100%"
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    />
                  </div>
                  <div className="col-sm-8 col-md-8 col-lg-9 detail-text">
                    <div className="detail-title">
                      {movie.original_title}
                      <span> ({fullYear(movie.release_date)})</span>
                    </div>
                    <div className="detail-sub">
                      <span>
                        {fullDate(movie.release_date)}({movie.original_language}
                        ){" "}
                      </span>
                      -
                      {movie.genres &&
                        movie.genres.map((item) => (
                          <span key={item.id}> {item.name} , </span>
                        ))}
                      -<span> {fulltime(movie.runtime)}</span>
                    </div>

                    <div className="detail-overview">Overview</div>
                    <div>{movie.overview}</div>
                    {!castLoading && (
                      <DirectorList cast={filterJob(cast.crew)} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-4 py-5">
            <div className="col-md-3 col-lg-3 p-0">
              <CastList
                cast={removeDuplicate(cast.cast)}
                title="Top Billed Cast"
              />
            </div>

            <div className="col-md-9 col-lg-9 p-0">
              <PhotoGallery
                photos={photos}
                error={photosError}
                loading={photoLoading}
              />
            </div>
          </div>
          <div className="mt-5">
            <DragScrollList
              id={id}
              movielist={removeDuplicate(recommendations.results)}
              title="Related Movies"
              link="/movie"
              error={recommendationsError}
              loading={recommendationsLoading}
            />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetail;
