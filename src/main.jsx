import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cartelera from './pages/Cartelera.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import PagTarjeta from './componentes/PagTarjeta.jsx'
import { Provider } from 'react-redux'
import store from './services/store';
import Favoritos from './componentes/Favoritos.jsx'
import Entradas from './componentes/Entradas.jsx'


const router = createBrowserRouter([
  {
      children: [{
      path: "/",
      element: <App />,
    },
    {
      path: "/Cartelera",
      element: <Cartelera />,
    },
    {
      path: "/FilmDetails/:id",
      element: <PagTarjeta />,
    },
    {
      path: "/favoritos",
      element: <Favoritos/>,
    },
    {
      path: "/entradas",
      element: <Entradas/>,
    }
  ]}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

