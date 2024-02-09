import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Tarjeta from './Tarjeta'; // Suponiendo que Tarjeta es el componente para mostrar cada película favorita

const Favoritos = () => {
  // Obtener la lista de películas favoritas del estado
  const favorites = useSelector(state => state.films.favorites);

  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Películas Favoritas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export default Favoritos;
