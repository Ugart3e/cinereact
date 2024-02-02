import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cartelera from './pages/Cartelera.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import PagTarjeta from './componentes/PagTarjeta.jsx'


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
    }
  ]}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

