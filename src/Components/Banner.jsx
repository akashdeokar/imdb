import axios from "axios";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=ee39b9eb3e79468185b57645ffa36e22`,
      )
      .then((res) => setMovie(res.data.results[0]));
  }, []);

  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
      <div className="text-white bg-gray-900/60 w-full p-4 text-center text-xl">
        {movie.title}
      </div>
    </div>
  );
};

export default Banner;
