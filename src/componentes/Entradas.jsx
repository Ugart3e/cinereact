import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Entradas = () => {
  const { entradas } = useSelector(state => state.entradas);
  return (
    <div>
      <Header />
      <div className="bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-4 text-purple-500">Entradas Compradas</h1>
        <div className="flex flex-col">
          {entradas?.map((entrada, index) => (
            <div key={index} className="border-b border-gray-500 py-2">
              <p>ID: {entrada.peliculaId}</p>
              <p>Nombre: {entrada.title}</p>
              <p>Cantidad: {entrada.cantidad}</p>
              <p>Precio Total: ${entrada.precioTotal.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entradas;