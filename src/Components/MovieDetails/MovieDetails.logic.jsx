import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsView from "./MovieDetails.view";
import axios from "axios";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=ee39b9eb3e79468185b57645ffa36e22`,
      )
      .then((res) => setMovieDetails(res.data));
  }, []);
  return <MovieDetailsView movieDetails={movieDetails} />;
};

export default MovieDetails;
