import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/slices/moviesSlice";
// import { fetchImageURL } from "./fetchImage";
import  ImageComponent  from './image';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);
 

  function handleFavoriteClick() {
    dispatch(toggleFavorite(movie));
  }
  return (
    <div className="movie-card p-4 bg-white shadow rounded-lg mb-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <div onClick={() => (window.location.href = movie.imdb_url)}>
        {/* <img src={imageUrl} alt={movie.title} /> */}
        <ImageComponent movie={movie} />
        <div>
          <h2>{movie.movie}</h2>
          <p>Rating: {movie.rating}</p>
        </div>
      </div>
      <button
        className="mt-2 text-blue-500 hover:text-blue-700"
        onClick={handleFavoriteClick}
      >
        {isFavorite ? "💔" : "💘"}
      </button>
    </div>
  );
};

export default MovieCard;
