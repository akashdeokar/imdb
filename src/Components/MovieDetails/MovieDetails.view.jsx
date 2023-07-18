import React from "react";
import Banner from "./Banner";

const MovieDetailsView = ({ movieDetails }) => {
  return (
    <>
      <Banner movieDetails={movieDetails} />
    </>
  );
};

export default MovieDetailsView;
