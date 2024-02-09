import { configureStore } from '@reduxjs/toolkit'
import {filmsSlice} from './filmsSlice'
import {entradasSlice} from './entradasSlice'

export default configureStore({
  reducer: {
    films: filmsSlice.reducer,
    entradas: entradasSlice.reducer,
  },
})