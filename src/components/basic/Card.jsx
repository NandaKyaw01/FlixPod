import { useState } from "react";
import { ImdbIcon } from "../../icon";

const Card = ({ imdb, movieImage, movieName, releaseDate, style }) => {
  const [isPhotoLoading, setisPhotoLoading] = useState(false);

  return (
    <div className="item" style={style}>
      <div className="movie-img">
        {movieImage !== null ? (
          <img
            className="image"
            loading="lazy"
            src={
              !isPhotoLoading
                ? require("../../assets/movieImg.jpg")
                : `https://image.tmdb.org/t/p/w300/${movieImage}`
            }
            onLoad={() => setisPhotoLoading(true)}
          />
        ) : (
          <img className="image" src={require("../../assets/movieImg.jpg")} />
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
