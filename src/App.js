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
                />
              </>
            }
          ></Route>

          <Route path="/watchlist" element={<Watchlist />}></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
