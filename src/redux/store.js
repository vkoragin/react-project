import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurants/slice';
import { cartSlice } from './entities/cart/slice';
import { menuSlice } from './entities/menu/slice';
import { reviewsSlice } from './entities/reviews/slice';
import { usersSlice } from './entities/users/slice';
import { requestSlice } from './entities/request/slice';
import { restaurantSlice } from './entities/restaurant/slice';

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
});
