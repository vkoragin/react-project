import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishIds } from './slice';

export const getDish = createAsyncThunk(
  'dish/getDish',
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

    const result = await response.json();

    if (!result) {
      rejectWithValue('no data');
      return;
    }

    return result;
  },
  {
    condition: (dishId, { getState }) => {
      return !selectDishIds(getState()).includes(dishId);
    },
  }
);
