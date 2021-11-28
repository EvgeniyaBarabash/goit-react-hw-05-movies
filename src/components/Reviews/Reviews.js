import { useState, useEffect } from 'react';
import * as movieAPI from '../services/movie-api';
import { useParams } from 'react-router';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    movieAPI.fetchMovieRewies(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);
  console.log(
    movieAPI.fetchMovieRewies(movieId).then(data => {
      console.log(data.results);
    }),
  );
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(rewiew => (
            <li key={reviews.id}>
              <p>Author: {rewiew.author}</p>
              <p>{rewiew.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
