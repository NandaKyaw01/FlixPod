import React from "react";

const PaginationLoadMore = ({ clickEvent }) => {
  return (
    <div className="loadmore-container">
      <button onClick={clickEvent} className="btn-loadmore">
        Load More
      </button>
    </div>
  );
};

export default PaginationLoadMore;
