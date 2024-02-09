import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../services/filmsSlice';
import Header from './Header';
import { agregarEntradas } from '../services/entradasSlice';

const PagTarjeta = () => {
  const [pelicula, setPelicula] = useState(null);
  const [trailerLink, setTrailerLink] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [entradas, setEntradas] = useState(1);
  const [precioTotal, setPrecioTotal] = useState(7.0);
  const [nombrePeli, setNombrePeli] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const obtenerDetallesPelicula = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=61b8922&i=${id}`);

        if (!response.ok) {
          console.log("Fallo en la solicitud");
          throw new Error("Error en la consulta");
        }

        const data = await response.json();

        if (data.Response === 'False') {
          throw new Error("Error en la consulta");
        }

        setPelicula(data);
        setNombrePeli(data.Title);

        // Obtener enlace al trailer de YouTube basado en el título de la película
        const trailerLink = await obtenerEnlaceTrailer(data.Title);
        setTrailerLink(trailerLink);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerDetallesPelicula();
  }, [id]);

  useEffect(() => {
    // Recalcular el precio total cuando cambie la cantidad de entradas
    setPrecioTotal(entradas * 7.0);
  }, [entradas]);

  const obtenerEnlaceTrailer = async (titulo) => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${titulo} trailer&maxResults=1&type=video&key=AIzaSyBuaMpdACimxrIiS7_C1g0nQpwK81iozJA`);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        return `https://www.youtube.com/embed/${videoId}`;
      } else {
        throw new Error("No se encontró un trailer en YouTube.");
      }
    } catch (error) {
      console.log(error);
      return '';
    }
  };

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'star') {
      // Añadir la película actual como favorita
      dispatch(addToFavorites(pelicula));
      // Mostrar el modal con el mensaje de película añadida a favoritos
      setSelectedButton('star');
      setModalVisible(true);
    } else if (buttonType === 'ticket') {
      // Mostrar el modal de compra de entradas
      setSelectedButton('ticket');
      setModalVisible(true);
    }
  };

  const handleEntradasChange = (event) => {
    const cantidadEntradas = parseInt(event.target.value, 10);
    setEntradas(cantidadEntradas);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedButton(null);
    setEntradas(1);
    setPrecioTotal(7.0);
  };

  const comprarEntradas = () => {
    const entradasCompradas = {
      peliculaId: id,
      title: nombrePeli,
      cantidad: entradas,
      precioTotal: precioTotal
    };
    console.log(entradasCompradas); // Agreguemos un console.log aquí para verificar la estructura
    // Actualizar el estado de entradas y precio total
    setModalVisible(false); // Cerrar el modal antes de actualizar el estado
    // Dispatch para agregar las entradas al estado global
    dispatch(agregarEntradas(entradasCompradas));
  };
  
  

  return (
    <div className="bg-black text-white p-6">
      <Header />
      <div className="flex flex-col md:flex-row my-20">
        <div className="md:w-1/2 mr-4">
          <h1 className="text-5xl font-bold mb-4 text-purple-500 flex justify-center">{pelicula?.Title}</h1>

          <div className='my-10 flex flex-grow flex-col justify-center w-96 m-auto'>
            <p className="text-lg mb-2">
              <span className="font-bold text-purple-500">Año:</span> {pelicula?.Year}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-purple-500">Fecha de Salida:</span> {pelicula?.Released}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-purple-500">Duración:</span> {pelicula?.Runtime}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-purple-500">Género:</span> {pelicula?.Genre}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-purple-500">Director:</span> {pelicula?.Director}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-purple-500">Actores:</span> {pelicula?.Actors}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-purple-500">Premios:</span> {pelicula?.Awards}
            </p>
            <p className="text-lg mb-2">
              <span className="font-bold text-purple-500">IMDb Rating:</span> {pelicula?.imdbRating}
            </p>
          </div>
        </div>
        <div className="md:w-1/4 h-auto">
          <img src={pelicula?.Poster} alt={pelicula?.Title} className="w-full h-auto" />
        </div>
      </div>

      {/* Botones de estrella y ticket */}
      <div className="flex items-center justify-center space-x-4 mb-16">
        <button onClick={() => handleButtonClick('star')}>
          <img src='/Recursos/estrellaButton.png' alt="Estrella" className='w-10 h-auto'/>
        </button>
        <button onClick={() => handleButtonClick('ticket')}>
          <img src='/Recursos/ticketButton.png' alt="Ticket" className='w-10 h-auto'/>
        </button>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-md text-black">
            {selectedButton === 'star' ? (
              <p className="text-lg font-semibold mb-4">
                {pelicula?.Title ? `${pelicula.Title} añadida a Favoritos!` : 'Película añadida a Favoritos!'}
              </p>
            ) : (
              <>
                <p className="text-lg font-semibold mb-4">Compra de entradas para {pelicula?.Title}</p>
                <label htmlFor="cantidadEntradas" className="mr-2">Cantidad de Entradas:</label>
                <select
                  id="cantidadEntradas"
                  value={entradas}
                  onChange={handleEntradasChange}
                  className="p-2 border border-gray-400 rounded"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cantidad) => (
                    <option key={cantidad} value={cantidad}>{cantidad}</option>
                  ))}
                </select>
                <button className="bg-purple-500 text-white p-2 rounded" onClick={comprarEntradas}>
                  Comprar
                </button>
              </>
            )}
            <button className="bg-purple-500 text-white p-2 rounded" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Trailer */}
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-4 text-purple-500'>Trailer</h1>
      </div>
      <div className="block m-auto mb-10 w-1/2 h-auto">
        {trailerLink ? (
          <iframe
            title="Trailer"
            width="100%"
            height="315"
            src={trailerLink}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No se encontró el trailer.</p>
        )}
      </div>
    </div>
  );
};

export default PagTarjeta;