import { createAsyncThunk } from '@reduxjs/toolkit';

// Acción asincrónica para simular la compra de entradas
export const comprarEntradas = createAsyncThunk(
  'entradas/comprarEntradas',
  async (entrada) => {
    try {
      // Simular una pequeña espera de tiempo antes de completar la compra (opcional)
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Devolver la entrada comprada como parte de la acción
      return entrada;
    } catch (error) {
      throw new Error('Error al comprar las entradas.');
    }
  }
);
