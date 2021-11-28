import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from 'components/pages/HomePage';
import AppBar from 'components/AppBar/AppBar';
import MovieDetailsPage from 'components/pages/MovieDetailsPage';
export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}
