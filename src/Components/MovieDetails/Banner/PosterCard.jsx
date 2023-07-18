import React from "react";

const PosterCard = ({ poster_path }) => {
  return (
    <div className="w-[15rem] rounded-2xl overflow-hidden">
      <img
        className="w-full"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
      />
    </div>
  );
};

export default PosterCard;
