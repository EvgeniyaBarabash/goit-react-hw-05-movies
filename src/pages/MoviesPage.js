import { useState, useEffect } from 'react';
import * as movieAPI from '../services/movie-api';
import s from './MoviesPage.module.css';
import { Link } from 'react-router-dom';
import SearchBar from 'components/Searchbar/Searchbar';

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
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title || movie.name}</Link>
            </li>
          ))}
        </ul>
      )}
      ;
    </>
  );
}
