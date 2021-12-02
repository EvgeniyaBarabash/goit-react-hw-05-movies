import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as movieAPI from '../services/movie-api';
import { useParams } from 'react-router';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    movieAPI.fetchMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  console.log(
    movieAPI.fetchMovieDetails(movieId).then(data => {
      console.log(data);
    }),
  );
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <>
      <Button
        type={'button'}
        children={'Go back'}
        onClick={handleClick}
        aria-label="Go back"
      />
      {movie && (
        <div className={s.wrapper}>
          <div className={s.img}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
          </div>
          <div className={s.content}>
            <h2>{movie.title || movie.name}</h2>
            <p>Year: {movie.release_date.slice(0, 4)}</p>
            <h3>Genres</h3>
            <p>
              {movie.genres.map(genre => {
                return `${genre.name}`;
              })}
            </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>

          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/cast" element={movie && <Cast />} />
        <Route path="/reviews" element={movie && <Reviews />} />
      </Routes>
    </>
  );
}
