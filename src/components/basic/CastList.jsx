import { Link } from "react-router-dom";

const CastList = ({ cast, title }) => {
  return (
    <div className="cast-wrapper">
      <div className="cast-title">{title}</div>
      <div className="cast-container">
        {cast.slice(0, 5).map((item) => (
          <div key={item.id} className="sub-cast-container">
            <div className="cast-photo">
              <img
                src={`https://image.tmdb.org/t/p/w185/${item.profile_path}`}
              />
            </div>
            <div className="cast-description">
              <p className="cast-name">{item.name}</p>
              <p className="cast-position">{item.character}</p>
            </div>
          </div>
        ))}
        <Link to="/" className="cast-viewall">
          View All...
        </Link>
      </div>
    </div>
  );
};

export default CastList;
