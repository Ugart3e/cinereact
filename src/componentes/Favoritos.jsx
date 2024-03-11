import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Tarjeta from './Tarjeta';
import { observer } from 'mobx-react';
import filmsStore from '../services/store';

const Favoritos = () => {
  // Obtener la lista de películas favoritas del estado
  const favorites = filmsStore.filmsState.favorites;

  return (
    <div className='bg-black h-full'>
      <Header />
      <div className="container mx-auto py-8 bg-black">
        <h1 className="text-2xl text-white font-bold mb-4">Películas Favoritas</h1>
        <div className="flex gap-2">
          {favorites.length > 0 ? (
            // Renderizar cada película favorita utilizando el componente Tarjeta
            favorites.map((pelicula, index) => (
              <Tarjeta
                key={index}
                id={pelicula.imdbID}
                titulo={pelicula.Title}
                poster={pelicula.Poster}
                // Puedes añadir más props necesarias para el componente Tarjeta aquí
              />
            ))
          ) : (
            // Mostrar un mensaje si no hay películas favoritas
            <p>No hay películas favoritas por el momento.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default observer(Favoritos);
