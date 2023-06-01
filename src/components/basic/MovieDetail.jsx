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

const MovieDetail = () => {
  const { id } = useParams();
  const {
    data: movieDescription,
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

  const filterJob = (arr) => {
    const job = arr.filter(
      (item) => item.job === "Director" || item.job === "Producer"
    );
    const ids = job.map(({ id }) => id);
    return job.filter(({ id }, index) => !ids.includes(id, index + 1));
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
  return (
    <>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          className="detail-background"
          style={{
            backgroundImage: `url(
            "https://image.tmdb.org/t/p/w1280/${movieDescription.backdrop_path}"
          )`,
          }}
        >
          <div className="detail-backdrop">
            <div className="detail-container">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-3">
                  <img
                    width="100%"
                    src={`https://image.tmdb.org/t/p/w300/${movieDescription.poster_path}`}
                  />
                </div>
                <div className="col-sm-8 col-md-8 col-lg-9 detail-text">
                  <div className="detail-title">
                    {movieDescription.original_title}
                    <span> ({fullYear(movieDescription.release_date)})</span>
                  </div>
                  <div className="detail-sub">
                    <span>
                      {fullDate(movieDescription.release_date)}(
                      {movieDescription.original_language}){" "}
                    </span>
                    -
                    {movieDescription.genres &&
                      movieDescription.genres.map((item) => (
                        <span key={item.id}> {item.name} , </span>
                      ))}
                    -<span> {fulltime(movieDescription.runtime)}</span>
                  </div>

                  <div className="detail-overview">Overview</div>
                  <div>{movieDescription.overview}</div>
                  <DirectorList cast={filterJob(cast)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {castLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="row px-4 py-5">
            <div className="col-md-3 col-lg-3 p-0">
              <CastList cast={removeDuplicate(cast)} title="Top Billed Cast" />
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
              movielist={removeDuplicate(recommendations)}
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
