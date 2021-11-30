import { useState, useEffect } from 'react';
import * as movieAPI from '../services/movie-api';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';
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
      {movies && (
        <ul className={s.list}>
          {movies.map(movie => (
            <li key={movie.id} className={s.item}>
              <Link to={`movies/${movie.id}`} className={s.link}>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <div className={s.content}><h3 className={s.text}>{movie.title || movie.name}</h3>
                <p className={s.year}>{(movie.release_date).slice(0,4)}</p></div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
