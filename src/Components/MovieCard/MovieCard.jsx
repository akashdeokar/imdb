import React from "react";

const MovieCard = ({
  title,
  poster_path,
  movieId,
  watchList,
  handleAddRemove,
}) => {
  return (
    <div
      id={movieId}
      className="h-[40vh] w-[200px] rounded-xl bg-center bg-cover hover:scale-110 transition-transform duration-300 hover:cursor-pointer flex flex-col items-end justify-between overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div
        onClick={() => handleAddRemove(movieId)}
        className="m-2 bg-gray-900/60 rounded h-8 w-8 flex justify-center items-center"
      >
        {watchList && watchList.includes(movieId) ? (
          <span>&#10060;</span>
        ) : (
          <span>&#128525;</span>
        )}
      </div>
      <div className="text-center w-full text-white text-xl bg-gray-900/60 p-2">
        {title}
      </div>
    </div>
  );
};

export default MovieCard;
