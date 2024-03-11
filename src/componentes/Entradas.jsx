import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { observer } from 'mobx-react-lite';
import ticketStore from '../services/entradasStore';

const Entradas = () => {
  const entradas = ticketStore.ticketState.entradas;
  return (
    <div className='pb-96 bg-black'>
      <Header />
      <div className="bg-black text-white p-6 pb-16">
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

export default observer(Entradas);
