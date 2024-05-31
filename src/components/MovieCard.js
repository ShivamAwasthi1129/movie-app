import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <div className="movie-card p-4 bg-white shadow rounded-lg mb-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div onClick={() => window.location.href = movie.imdb_url}>
        <img src={movie.image} alt={movie.title} />
        <div>
          <h2>{movie.movie}</h2>
          {/* <p>{movie.description}</p> */}
          <p>Rating: {movie.rating}</p>
          {/* <p>Director: {movie.director}</p> */}
        </div>
      </div>
      <button className="mt-2 text-blue-500 hover:text-blue-700" onClick={handleFavoriteClick}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default MovieCard;
