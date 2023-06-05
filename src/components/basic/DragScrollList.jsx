import ScrollContainer from "react-indiana-drag-scroll";
import { Link, redirect, useNavigate } from "react-router-dom";
import Card from "./Card";
import LoadMoreCard from "./LoadMoreCard";

const DragScrollList = ({ id, movielist, title, link, error, loading }) => {
  const recomHandler = () => window.location.reload(false);

  if (error) return <div>{error}</div>;
  return (
    <>
      <div className="custom-container-scroll">
        <div className="title ps-4">{title}</div>
        <ScrollContainer className="scroll-container">
          {movielist.slice(0, 9).map((item, index) => (
            <Link to={`${link}/${item.id}`} key={item.id}>
              <Card
                movieName={item.title || item.name}
                movieImage={item.poster_path}
                releaseDate={item.release_date || item.Cardfirst_air_date}
                imdb={item.vote_average}
                style={
                  index === 0
                    ? { marginLeft: "24px", height: "298px", width: "224px" }
                    : { height: "298px", width: "224px" }
                }
              />
            </Link>
          ))}
          <LoadMoreCard id={id} link={link} />
        </ScrollContainer>
      </div>
    </>
  );
};

export default DragScrollList;
