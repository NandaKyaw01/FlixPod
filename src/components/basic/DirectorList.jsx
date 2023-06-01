import { Link } from "react-router-dom";

const DirectorList = ({ cast }) => {
  return (
    <div className="row">
      {cast.slice(0, 5).map((item) => (
        <div className="col-4 pt-5 pb-3" key={item.id}>
          <div>{item.name}</div>
          <div>{item.job}</div>
        </div>
      ))}
      {cast.length > 5 && (
        <div className="col-4 py-5">
          <Link to="#">View All...</Link>
        </div>
      )}
    </div>
  );
};

export default DirectorList;
