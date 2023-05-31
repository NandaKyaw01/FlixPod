import React from "react";
import DetailCard from "./DetailCard";
import ScrollContainer from "react-indiana-drag-scroll";

const CastList = ({ cast }) => {
  return (
    <div className="custom-container">
      <div className="title">Top Billed Cast</div>
      <ScrollContainer className="scroll-container">
        {cast.map((item) => (
          <DetailCard
            key={item.id}
            profile={item.profile_path}
            name={item.name}
            character={item.character}
          />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default CastList;
