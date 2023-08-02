import React from "react";
import PosterCard from "./PosterCard";

const Banner = ({ movieDetails }) => {
  if (movieDetails.backdrop_path == undefined) {
    return;
  }
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}')`,
      }}
    >
      <div className="bg-gray-200/80">
        <div className="flex flex-nowrap p-12">
          <PosterCard poster_path={movieDetails.poster_path} />
          <div className="grow px-8">
            <div className="text-4xl text-white font-bold">
              <a
                href={movieDetails.homepage}
                target="_blank"
                className="hover:cursor-pointer hover:text-gray-200"
              >
                {movieDetails.title}
              </a>{" "}
              (
              {movieDetails.release_date &&
                movieDetails.release_date.split("-")[0]}
              )
            </div>
            <div className="text-white flex gap-4 font-bold my-1">
              <div>&#x2022; {movieDetails.release_date}</div>
              <div>
                &#x2022;{" "}
                {movieDetails.genres &&
                  movieDetails.genres.map((genre, idx) => (
                    <span key={idx}>
                      {idx > 0 && " | "} {genre.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="text-white font-bold italic mt-4">
              {movieDetails.tagline}
            </div>
            <div className="text-2xl text-white font-bold mt-8">Overview</div>
            <div className="text-white font-bold mt-2">
              {movieDetails.overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
