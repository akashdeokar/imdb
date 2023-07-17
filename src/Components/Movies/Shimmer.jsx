import React from "react";
import MovieCardShimmer from "../MovieCard/Shimmer";

const Shimmer = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((itr, idx) => (
        <MovieCardShimmer key={idx} />
      ))}
    </>
  );
};

export default Shimmer;
