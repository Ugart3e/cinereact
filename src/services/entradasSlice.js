import { createSlice } from '@reduxjs/toolkit';

// Función para obtener las entradas desde localStorage o retornar un array vacío si no hay entradas almacenadas
const getInitialEntradas = () => {
  const entradas = JSON.parse(localStorage.getItem('entradas'));
  return entradas ? entradas : [];
};

// Estado inicial obtenido desde localStorage o un array vacío si no hay entradas almacenadas
const initialState = {
  entradas: getInitialEntradas(),
};

export const entradasSlice = createSlice({
  name: 'entradas',
  initialState,
  reducers: {
    agregarEntradas(state, action) {
      console.log(action);
      const { peliculaId, title, cantidad, precioTotal } = action.payload;
      const nuevaEntrada = { peliculaId,title, cantidad, precioTotal };
      state.entradas.push(nuevaEntrada);
      // Actualizar las entradas en localStorage
      localStorage.setItem('entradas', JSON.stringify(state.entradas));
    },
  },
});

export const { agregarEntradas } = entradasSlice.actions;

export default entradasSlice.reducer;
