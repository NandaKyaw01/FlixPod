import { ImdbIcon } from "../../icon";

const Card = ({ imdb, movieImage, movieName, releaseDate, style }) => {
  return (
    <div className="item" style={style}>
      <div className="movie-img">
        {movieImage !== null ? (
          <img
            className="image"
            src={`https://image.tmdb.org/t/p/w300/${movieImage}`}
          />
        ) : (
          <img className="image" src={require("../../assets/usericon.jpg")} />
        )}

        <div className="cardinfo">
          <div className="cardtitle">{movieName}</div>
          <div className="cardyear">{releaseDate}</div>
          <div className="cardrating">
            <span>
              <ImdbIcon />
            </span>
            <span className="rating">{imdb} Rating</span>
            <span>
              <button className="button">Watch</button>
            </span>
            <span>
              <button className="plusbutton">+</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
