import React from "react";
import PosterCard from "./PosterCard";

const Banner = ({ backdrop_path, poster_path }) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${backdrop_path}')`,
      }}
    >
      <div className="bg-sky-200/80">
        <div className="flex flex-nowrap p-12">
          <PosterCard poster_path={poster_path} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
