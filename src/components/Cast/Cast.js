import { useState, useEffect } from 'react';
import * as movieAPI from '../../services/movie-api';
import { useParams } from 'react-router';
import defaultImage from 'images/defaultImage.jpg';
import s from './Cast.module.css';
export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    movieAPI.fetchMovieCradits(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);
  console.log(
    movieAPI.fetchMovieCradits(movieId).then(data => {
      console.log(data.cast);
    }),
  );
  return (
    <>
      {cast && (
        <ul className={s.list}>
          {cast.map(actor => (
            <li key={actor.id} className={s.item}>
              <img
                className={s.img}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w342/${actor.profile_path}`
                    : defaultImage
                }
                alt={actor.name}
              />
              <p className={s.text}>{actor.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
