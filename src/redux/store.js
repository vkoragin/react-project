import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './entities/cart/slice';
import { api } from './servicies/api';

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});
