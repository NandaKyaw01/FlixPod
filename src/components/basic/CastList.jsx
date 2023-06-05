import { Link } from "react-router-dom";

const CastList = ({ cast, title }) => {
  return (
    <div className="cast-wrapper">
      <div className="cast-title">{title}</div>
      <div className="sub-cast-wrapper">
        <div className="cast-container">
          {cast.map((item) => (
            <div key={item.id} className="sub-cast-container">
              <div className="cast-photo">
                {item.profile_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${item.profile_path}`}
                  />
                ) : (
                  <img src={require("../../assets/usericon.jpg")} />
                )}
              </div>
              <div className="cast-description">
                <p className="cast-name">{item.name}</p>
                <p className="cast-position">{item.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastList;
