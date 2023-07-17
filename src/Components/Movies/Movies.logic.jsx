import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MoviesView from "./Movies.view";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleNext = () => {
    setLoading(true);
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      setLoading(true);
      setPage(page - 1);
    }
  };

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

  return (
    <MoviesView
      movies={movies}
      page={page}
      loading={loading}
      handleClick={handleClick}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
  );
};

export default Movies;
