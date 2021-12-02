import { useState, useEffect } from 'react';
import * as movieAPI from '../services/movie-api';
import MovieCard from 'components/MovieCard/MovieCard';
export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    movieAPI.fetchTrending().then(data => {
      setMovies(data.results);
    });
  }, []);
  console.log(
    movieAPI.fetchTrending().then(data => {
      console.log(data.results);
    }),
  );
  return (
    <>
      <h1>Trending today</h1>
      {movies && <MovieCard movies={movies} />}
    </>
  );
}
