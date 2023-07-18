import React from "react";
import Banner from "./Banner";

const MovieDetailsView = ({ movieDetails }) => {
  return (
    <>
      <Banner
        backdrop_path={movieDetails.backdrop_path}
        poster_path={movieDetails.poster_path}
      />
    </>
  );
};

export default MovieDetailsView;
