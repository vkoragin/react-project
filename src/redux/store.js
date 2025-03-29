import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurant/slice';
import { cartSlice } from './entities/cart/slice';
import { menuSlice } from './entities/menu/slice';
import { reviewsSlice } from './entities/reviews/slice';
import { usersSlice } from './entities/users/slice';

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
