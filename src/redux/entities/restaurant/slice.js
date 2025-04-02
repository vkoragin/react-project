import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getRestaurant } from './get-restaurant';

export const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getRestaurant.fulfilled, (state, { payload }) => {
      entityAdapter.setOne(state, payload);
    }),
});

export const { selectRequestStatus } = restaurantSlice.selectors;

const selectRestaurantSlice = (state) => state.restaurant;

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantIds,
} = entityAdapter.getSelectors(selectRestaurantSlice);
