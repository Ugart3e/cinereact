import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  films: [],
  favorites: [],
  isLoading: false,
  error: null,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    startLoadingFilms: (state) => {
      state.isLoading = true;
    },
    setFilms: (state, action) => {
      state.films = action.payload.films || [];
      state.isLoading = false;
      state.error = null;
    },
    addToFavorites: (state, action) => {
      const film = action.payload;
      state.favorites.push(film);
    },
    removeFromFavorites: (state, action) => {
      const filmId = action.payload;
      state.favorites = state.favorites.filter(film => film.id !== filmId);
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startLoadingFilms, setFilms, addToFavorites, removeFromFavorites, setError } = filmsSlice.actions;

export const selectFilms = (state) => state.films.films;
export const selectFavorites = (state) => state.films.favorites;
export const selectFilmsLoading = (state) => state.films.isLoading;
export const selectFilmsError = (state) => state.films.error;

export default filmsSlice.reducer;