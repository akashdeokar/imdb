import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Watchlist from "./Components/Watchlist";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [watchList, setWatchList] = useState([]);

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

  const Includes = (arr, movie) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == movie.id) {
        return true;
      }
    }
    return false;
  };

  const handleAddRemove = (movie) => {
    let newArr = [...watchList];
    if (Includes(newArr, movie)) {
      newArr = newArr.filter((movieObj) => movieObj.id !== movie.id);
    } else {
      newArr.push(movie);
    }
    localStorage.setItem("movieApp", JSON.stringify(newArr));
    setWatchList(newArr);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  page={page}
                  loading={loading}
                  setLoading={setLoading}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  watchList={watchList}
                  setWatchList={setWatchList}
                  handleAddRemove={handleAddRemove}
                  Includes={Includes}
                />
              </>
            }
          ></Route>

          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchList={watchList}
                handleAddRemove={handleAddRemove}
                setWatchList={setWatchList}
              />
            }
          ></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
