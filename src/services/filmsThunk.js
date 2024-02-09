import { getMoviesBy } from "../services/filmsAPI"
import { setFilms} from "./filmsSlice"


import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFavoriteMovies } from '../services/filmsAPI';

export const fetchFavoriteMovies = createAsyncThunk(
  'films/fetchFavoriteMovies',
  async () => {
    try {
      const favoriteMovies = getFavoriteMovies();
      return favoriteMovies;
    } catch (error) {
      throw new Error('Error al obtener las películas favoritas.');
    }
  }
);


//El thunk es una funcion que devuelve una accion asincrona
export const obtenerPeliculas = (keywords) => {
    return async (dispatch, getState) => {

        try {
            const res = await getMoviesBy(keywords);

            if (!res.ok) {
                throw new Error("Error");
            }
            const data = await res.json();
            const films = data["Search"];
            console.log(films)


            dispatch(setFilms({ films: films }))

        } catch (error) {
            //Notificar error con dispatch
        }

    }
}