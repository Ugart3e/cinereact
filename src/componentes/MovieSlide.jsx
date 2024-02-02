import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const MovieSlide = ({ id, title, poster }) => {
  const navigate = useNavigate();

  const handleTarjetaClick = () => {
    navigate(`/FilmDetails/${id}`);
  };

  return (
    <div className="w-full h-full p-2">
      <img className="w-full h-2/3 object-cover rounded-md" src={poster} alt={title} onClick={handleTarjetaClick}/>
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};
// Componente de Slider de Películas
const MovieSlider = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const response = await fetch('https://www.omdbapi.com/?apikey=61b8922&s=avengers&plot=full');
        if (!response.ok) {
          console.error('Error al obtener datos de la API');
          return;
        }
        const data = await response.json();
        setMovies(data.Search || []);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    obtenerPeliculas();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
  };

  return (
    <div className='bg-black'>
      <Slider {...settings} className="w-3/4 h-3/4 mx-auto">
        {movies.map((movie, index) => (
          <MovieSlide key={index} title={movie.Title} id={movie.imdbID} poster={movie.Poster} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;