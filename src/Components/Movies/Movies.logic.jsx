import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MoviesView from "./Movies.view";

const Movies = ({
  page,
  loading,
  setLoading,
  handleNext,
  handlePrev,
  watchList,
  setWatchList,
  handleAddRemove,
  Includes,
}) => {
  const [movies, setMovies] = useState([]);

  const handleClick = (e) => {
    if (e.target.id !== "") {
      navigate(`movie/${e.target.id}`);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=ee39b9eb3e79468185b57645ffa36e22&page=${page}`,
      )
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    let moviesFromLocalStorage =
      localStorage.getItem("movieApp") == null
        ? "[]"
        : localStorage.getItem("movieApp");
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <MoviesView
      movies={movies}
      page={page}
      loading={loading}
      handleClick={handleClick}
      handleNext={handleNext}
      handlePrev={handlePrev}
      watchList={watchList}
      handleAddRemove={handleAddRemove}
      Includes={Includes}
    />
  );
};

export default Movies;
