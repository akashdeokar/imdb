import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>MovieId : {movieId}</div>;
};

export default MovieDetails;
