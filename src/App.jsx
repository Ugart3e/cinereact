import Header from './componentes/Header'
import MovieSliderExample from './componentes/MovieSlide'
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom'
import Cartelera from './pages/Cartelera'



function App() {
  return (
    <div className='bg-black'>
     <Header/>
     <div className='flex justify-center mt-28'>
      <h1 className='text-purple-500 text-7xl font-extrabold pb-10'>Películas Destacadas</h1>
    </div>
     <MovieSliderExample/>
     <div>
     <Link to="/Cartelera">
            <div className='flex justify-center'>
              <button className='my-10 text-purple-500 text-5xl font-extrabold border-4 border-purple-500 rounded-xl px-6 py-3'>
                Ver Cartelera
              </button>
            </div>
          </Link>
      <img className='pr-10 pt-10 pb-10' src='Recursos/banner.png' alt="Ejemplo" />
    </div>
     <p className='text-purple-500 mx-auto text-xl w-3/4 py-10 text-center'>
     "Películas Pepito se erige como el emblema supremo del cine a nivel mundial. No es solo un cine, es una experiencia cinematográfica inigualable que redefine la magia del séptimo arte. Nos enorgullece proclamarnos como el mejor cine del mundo, y esta distinción no es casualidad. En Películas Pepito, cada proyección es una obra maestra cuidadosamente seleccionada para transportar a nuestros espectadores a mundos extraordinarios. Nuestra dedicación a la excelencia se refleja en la calidad excepcional de imagen y sonido, creando un ambiente que envuelve a cada cinéfilo en una inmersión total. Lo que nos distingue va más allá de la pantalla grande. Es la pasión con la que compartimos cada historia, la atención meticulosa a los detalles y el servicio excepcional que ofrecemos a cada visitante. En Películas Pepito, no solo experimentas una película, vives una odisea cinematográfica que te deja maravillado. Únete a nosotros en esta travesía donde la cinematografía alcanza su máxima expresión y cada función es un testimonio de por qué Películas Pepito es el destino predilecto para los amantes del cine. Bienvenidos al ápice del arte cinematográfico, bienvenidos a Películas Pepito."  </p>
      </div>
  )
}

export default App
