import React from "react";
import { Link } from "react-router-dom";

const LoadMoreCard = ({ id, link }) => {
  return (
    <div className="item" style={{ marginRight: "24px" }}>
      <Link to={id === undefined ? `${link}` : `${link}/${id}/recommandations`}>
        <div
          className=" movie-img "
          style={{ height: "298px", width: "224px" }}
        >
          <p className="load-more">Load More</p>
        </div>
      </Link>
    </div>
  );
};

export default LoadMoreCard;
