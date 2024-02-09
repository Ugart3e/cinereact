import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tarjeta from '../componentes/Tarjeta';
import Header from '../componentes/Header';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPeliculas } from '../services/filmsThunk';

function Cartelera() {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { films } = useSelector(state => state.films);
  const [keywo, setKeywo] = useState('');

  useEffect(() => {
    if (busqueda.length >= 3) {
      dispatch(obtenerPeliculas(busqueda));
    } else {
      dispatch(obtenerPeliculas("war"));
    }
  }, [busqueda]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleTarjetaClick = (id) => {
    navigate(`/FilmDetails/${id}`);
  };

  return (
    <div className='bg-black'>
      <Header />
      <div>
        <img src='Recursos/cabeza_cart.png' alt="Ejemplo" />
      </div>

      <div className="h-full bg-black">
        <input
          type="text"
          placeholder="Buscar películas..."
          value={busqueda}
          onChange={handleInputChange}
          className="w-4/5 block m-auto p-3 text-lg border-b-2 border-purple-500 outline-none bg-transparent text-white text-center mx-auto my-4"
        />
      </div>

      <div className='flex flex-wrap w-4/5 m-auto bg-black max-h-fit'>
        {films?.map((pelicula, index) => (
          <Tarjeta
            key={index}
            id={pelicula.imdbID}
            titulo={pelicula.Title}
            poster={pelicula.Poster}
            onClick={() => handleTarjetaClick(pelicula.imdbID)}
          />
        ))}
      </div>
    </div>
  );
}

export default Cartelera;