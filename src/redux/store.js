import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurant/slice';
import { cartSlice } from './entities/cart/slice';
import { dishSlice } from './entities/menu/slice';
import { reviewsSlice } from './entities/reviews/slice';
import { usersSlice } from './entities/users/slice';

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
