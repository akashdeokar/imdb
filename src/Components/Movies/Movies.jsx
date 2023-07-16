import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard'
import axios from 'axios';
import Pagination from '../Pagination';
import MoviesShimmer from './Shimmer';

const Movies = () => {
  const [movies , setMovies] = useState([]);
  const [page , setPage] = useState(1);
  const [loading , setLoading] = useState(true);

  const handleNext = () => {
    setLoading(true);
    setPage(page+1);
  }

  const handlePrev = () => {
    if(page > 1){
      setLoading(true);
      setPage(page-1);
    }
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ee39b9eb3e79468185b57645ffa36e22&page=${page}`)
    .then(res => {
      setMovies(res.data.results);
      setLoading(false);
    });
  },[page])

  return (
    <div className='p-5'>
      <div className='text-center font-bold text-2xl m-5'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-around gap-8'>
        {!loading ? movies.map(movie => <MovieCard key={movie.id} title={movie.title} poster_path={movie.poster_path}/>) : <MoviesShimmer />}
      </div>
      <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies