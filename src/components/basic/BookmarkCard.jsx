import Card from "./Card";
import { useMovieDetail } from "../../hooks/useMovie";

const BookmarkCard = ({ movie_id }) => {
  const {
    data: movie,
    error: movieError,
    isLoading: movieLoading,
  } = useMovieDetail(movie_id);
  console.log(movie);

  if (movieError) return <></>;
  return (
    <>
      {!movieLoading && (
        <Card
          movieName={movie.title}
          movieImage={movie.poster_path}
          releaseDate={movie.release_date}
          imdb={movie.vote_average}
        />
      )}
    </>
  );
};

export default BookmarkCard;
