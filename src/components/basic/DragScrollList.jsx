import ScrollContainer from "react-indiana-drag-scroll";
import { Link, redirect, useNavigate } from "react-router-dom";
import Card from "./Card";
import LoadMoreCard from "./LoadMoreCard";

const DragScrollList = ({ id, movielist, title, link, error, loading }) => {
  if (error) return <div>{error}</div>;
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="custom-container-scroll">
          <div className="title ps-4">{title}</div>
          <ScrollContainer className="scroll-container">
            {movielist.map((item) => (
              <Link to={`${link}/${item.id}`} key={item.id}>
                <Card
                  movieName={item.title || item.name}
                  movieImage={item.poster_path}
                  releaseDate={item.release_date || item.Cardfirst_air_date}
                  imdb={item.vote_average}
                  style={{ height: "298px", width: "224px" }}
                />
              </Link>
            ))}
            <LoadMoreCard id={id} link={link} />
          </ScrollContainer>
        </div>
      )}
    </>
  );
};

export default DragScrollList;
