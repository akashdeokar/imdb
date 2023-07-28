import React, { useEffect } from "react";
import genreids from "../Utility/genre";

const Watchlist = ({ watchList, handleAddRemove }) => {
  useEffect(() => {}, []);
  return (
    <>
      <div className="flex items-center justify-center mx-auto w-[15rem] h-[3rem] bg-blue-400 rounded-xl text-white">
        All Genres
      </div>
      <div className="flex justify-center my-4">
        <input
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
            {watchList.map((movie) => (
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
