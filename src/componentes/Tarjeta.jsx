import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tarjeta = ({id, titulo, poster}) => {
  const [favorita, setFavorita] = useState(false);
  const navigate = useNavigate();
  
  const handleVerDetalle = () => {
    console.log(id);
    navigate(`/FilmDetails/${id}`);
  };

  const handleMarcarFavorita = () => {
    setFavorita(!favorita);
    onMarcarFavorita(pelicula, !favorita);
  };

  const handleComprar = () => {
    onComprar(pelicula);
  };

  console.log(poster)

  return (
    <div className="border-4 border-pink-500 w-1/4 h-auto" onClick={handleVerDetalle}>
      <img src={poster} alt={titulo} />
    </div>
  );
};

export default Tarjeta;