import { configureStore } from '@reduxjs/toolkit'

import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';

class FilmsStore {
    filmsState = {
        films: [],
        favorites: [],
        isLoading: false,
        //other state attributes...
    }

    constructor() {
        makeObservable(this, {
            filmsState: observable,
            updateFilms: action,
            prefetchData: action,
            setFilms: action,
            setFavorite: action,
            unsetFavorite: action,
            buscarPelis: action
        });
        //autorun(this.filmsState);  // WILL RUN AFTER EVERY ACTION INVOKE
        this.prefetchData();
    }

    setFilms = (films) => {
        this.filmsState.films = films;
    }

    updateFilms = (name) => {
        return 'NA';
    }

    setFavorite = (film) => {
      this.filmsState.favorites.push(film);
  }

  buscarPelis = async (keywords) => {
    console.log('Buscando')
    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=61b8922&s=${keywords}&page=1`);

  if (!res.ok) {
      throw new Error("Error");
  }
  const data = await res.json();
  const films = data["Search"];
  console.log(films)
  this.setFilms(films)
} catch (error) {

}
  }

    unsetFavorite = (film) => {
    let id = film.id;
    this.filmsState.favorites = this.filmsState.favorites.filter(film => film.id !== id);
  }

    prefetchData = async () => {
            try {
                    const res = await fetch(`https://www.omdbapi.com/?apikey=61b8922&s=ave&page=1`);
    
                if (!res.ok) {
                    throw new Error("Error");
                }
                const data = await res.json();
                const films = data["Search"];
                console.log(films)
                this.setFilms(films)
            } catch (error) {

            }
        }
}

const filmsStore = new FilmsStore()
export default filmsStore;