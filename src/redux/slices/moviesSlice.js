import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  // const response = await axios.get(`${API_URL}/movies`);
  const response = await axios.get(`https://dummyapi.online/api/movies`);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    favorites: [],
    status: 'idle',
    error: null
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const isFavorite = state.favorites.some(fav => fav.id === movie.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter(fav => fav.id !== movie.id);
      } else {
        state.favorites.push(movie);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.sort((a, b) => b.rating - a.rating);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
