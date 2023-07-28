import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

const Watchlist = ({ watchList, setWatchList, handleAddRemove }) => {
  let [genreList, setGenreList] = useState(["All Genres"]);
  let [curr_genre, setCurr_genre] = useState("All Genres");
  let [search, setSearch] = useState("");

  const handleFilter = (genre) => {
    setCurr_genre(genre);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let moviesFromLocalStorage =
      localStorage.getItem("movieApp") == null
        ? "[]"
        : localStorage.getItem("movieApp");
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  useEffect(() => {
    let arr = watchList.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    arr = new Set(arr);
    setGenreList(["All Genres", ...arr]);
    //defaulting to All Genre ,if curr_genre is not for render.
    if (!arr.has(curr_genre)) {
      setCurr_genre("All Genres");
    }
  }, [watchList]);

  return (
    <>
      <div className="flex flex-wrap justify-center my-5">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              key={genre}
              className={`hover:cursor-pointer flex items-center justify-center w-[9rem] h-[3rem] m-4 ${
                curr_genre == genre ? "bg-blue-400" : "bg-gray-400"
              } rounded-xl text-white`}
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          className="px-4 justify-center text-lg h-[3rem] w-[18rem] bg-gray-200 outline-none"
          type="text"
          placeholder="Search for Movies"
        />
      </div>
      <div className="border m-8 rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-900 text-center border-b-2">
            <th>Name</th>
            <th className="flex justify-center">
              <div className="p-2">
                <i class="fa-solid fa-arrow-up" />
              </div>
              <div className="p-2">Ratings</div>
              <div className="p-2">
                <i class="fa-solid fa-arrow-down" />
              </div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
            <th></th>
          </thead>
          <tbody>
            {watchList
              .filter((movie) => {
                if (curr_genre == "All Genres") {
                  return true;
                } else {
                  return genreids[movie.genre_ids[0]] == curr_genre;
                }
              })
              .filter((movie) => {
                return movie.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movie) => (
                <tr className="border-b-2 text-center">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="w-[8rem] aspect-[4/3]"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt=""
                    />
                    <div className="mx-4">{movie.title}</div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{genreids[movie.genre_ids[0]]}</td>
                  <td
                    onClick={() => handleAddRemove(movie)}
                    className="text-red-600 hover:cursor-pointer focus:text-black-600"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
