import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantsIds } from '../restaurants/slice';

export const getRestaurant = createAsyncThunk(
  'restaurant/getRestaurant',
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );

    const result = await response.json();

    if (!result) {
      rejectWithValue('no data');
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectRestaurantsIds(getState()).includes(restaurantId);
    },
  }
);
