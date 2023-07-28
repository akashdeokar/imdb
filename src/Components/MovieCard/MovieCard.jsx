import React from "react";

const MovieCard = ({ movie, watchList, handleAddRemove, Includes }) => {
  return (
    <div
      id={movie.id}
      className="h-[40vh] w-[200px] rounded-xl bg-center bg-cover hover:scale-110 transition-transform duration-300 hover:cursor-pointer flex flex-col items-end justify-between overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
      <div
        onClick={() => handleAddRemove(movie)}
        className="m-2 bg-gray-900/60 rounded h-8 w-8 flex justify-center items-center"
      >
        {watchList && Includes(watchList, movie) ? (
          <span>&#10060;</span>
        ) : (
          <span>&#128525;</span>
        )}
      </div>
      <div className="text-center w-full text-white text-xl bg-gray-900/60 p-2">
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;
