import React from "react";

const MovieCard = ({ title, poster_path }) => {
  return (
    <div
      className="h-[40vh] w-[200px] rounded-xl bg-center bg-cover hover:scale-110 transition-transform duration-300 hover:cursor-pointer flex items-end overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-center w-full text-white text-xl bg-gray-900/60 p-2">
        {title}
      </div>
    </div>
  );
};

export default MovieCard;
