import React from "react";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";
import MoviesShimmer from "./Shimmer";

const MoviesView = ({
  page,
  loading,
  movies,
  handleClick,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="p-5">
      <div className="text-center font-bold text-2xl m-5">Trending Movies</div>
      <div
        onClick={handleClick}
        className="flex flex-wrap justify-around gap-8"
      >
        {!loading ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              movieId={movie.id}
              poster_path={movie.poster_path}
            />
          ))
        ) : (
          <MoviesShimmer />
        )}
      </div>
      <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default MoviesView;
