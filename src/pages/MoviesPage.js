import { useState, useEffect } from 'react';
import * as movieAPI from '../services/movie-api';
import SearchBar from 'components/Searchbar/Searchbar';
import MovieCard from '../components/MovieCard/MovieCard';
export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (query === '') {
      return;
    }
    movieAPI.fetchSearch({ query }).then(data => {
      setMovies(data.results);
    });
  }, [query]);
  const handleSubmit = query => {
    setQuery(query);
    setMovies([]);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {movies && <MovieCard movies={movies} />};
    </>
  );
}
