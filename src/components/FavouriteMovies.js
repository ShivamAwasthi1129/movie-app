import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const FavoriteMovies = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="favorite-movies flex flex-wrap justify-center">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMovies;
