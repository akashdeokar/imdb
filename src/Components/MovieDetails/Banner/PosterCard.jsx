import React from "react";

const PosterCard = ({ poster_path }) => {
  if (poster_path == undefined) {
    return;
  }
  return (
    <div className="min-w-[40vh] w-[40vh] rounded-2xl overflow-hidden">
      <img
        className="w-full"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
      />
    </div>
  );
};

export default PosterCard;
