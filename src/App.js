import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
// import HomePage from 'components/pages/HomePage';
import AppBar from 'components/AppBar/AppBar';
// import MovieDetailsPage from 'components/pages/MovieDetailsPage';
import Container from 'components/Container/Container';
// import MoviesPage from 'components/pages/MoviesPage';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from 'components/Loading/Loading';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "movieDetails-page" */),
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movie-page" */),
);

export default function App() {
  return (
    <>
      <Container>
        <AppBar />
        <ToastContainer autoClose={3000} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="/movies/*" element={<MoviesPage />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
