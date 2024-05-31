import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import FavoriteMovies from './components/FavouriteMovies';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
