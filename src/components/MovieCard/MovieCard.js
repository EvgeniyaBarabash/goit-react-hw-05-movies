import React from 'react';
import s from 'pages/HomePage.module.css';
import { NavLink, useLocation } from 'react-router-dom';
export default function MovieCard({ movies }) {
  const location = useLocation();
  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map(movie => (
            <li key={movie.id} className={s.item}>
              <NavLink
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <div className={s.content}>
                  <h3 className={s.text}>{movie.title || movie.name}</h3>
                  <p className={s.year}>{movie.release_date.slice(0, 4)}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
