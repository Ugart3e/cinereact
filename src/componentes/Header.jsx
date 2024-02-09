import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="bg-black text-purple-500 p-4">
      <div className="container flex mx-auto items-center justify-between">
        <div className="flex items-center space-x-2">
        <Link to='/'>
          <img
            src="/Recursos/logo.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </Link>
          <h1 className="text-3xl font-bold tracking-wider">PeliculasPepito</h1>
        </div>
        <div className="flex items-center">
        <div className="relative m-1">
          <Link to='/favoritos'>
            <button className='bg-purple-500 p-3 border-2 border-purple-600'>
              <p className='text-purple-950 font-bold font-sans'>Favoritos</p>
            </button>
          </Link>
          </div>
          <div className="relative m-1">
          <Link to='/entradas'>
            <button className='bg-purple-500 p-3 border-2 border-purple-600'>
              <p className='text-purple-950 font-bold font-sans'>Entradas</p>
            </button>
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
