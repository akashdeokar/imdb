import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./MovieCard/Shimmer.module.css";

const Banner = () => {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=ee39b9eb3e79468185b57645ffa36e22`,
      )
      .then((res) => setMovie(res.data.results[0]));
  }, []);

  return movie == undefined ? (
    <BannerShimmer />
  ) : (
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

const BannerShimmer = () => {
  return (
    <div
      className={`h-[20vh] md:h-[70vh] flex items-end ${styles.changecolorlight}`}
    >
      <div className={`w-full p-6 ${styles.changecolordark}`}></div>
    </div>
  );
};

export default Banner;
