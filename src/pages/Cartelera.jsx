import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tarjeta from '../componentes/Tarjeta';
import Header from '../componentes/Header';

function Cartelera() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const obtenerPeliculas = async () => {
    try {
      let apiUrl = `https://www.omdbapi.com/?apikey=61b8922&s=fin&page=1`;

      if (busqueda.length >= 3) {
        apiUrl = `https://www.omdbapi.com/?apikey=61b8922&s=${busqueda}&page=1`;
      }

      const response = await axios.get(apiUrl);

      if (response.data.Response === 'False') {
        throw new Error("Error en la consulta");
      }

      setPeliculas(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPeliculas();
  }, [busqueda]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleTarjetaClick = (id) => {
    navigate(`/FilmDetails/${id}`);
  };

  return (
    <div className='bg-black'>
      <Header/>
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
        {peliculas.map((pelicula, index) => (
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
