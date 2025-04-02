import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../mocks/normalized-mock';

const initialState = {
  menu: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
};

export const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  selectors: {
    selectDishById: (state, id) => state.menu[id],
  },
});

export const { selectDishById } = menuSlice.selectors;
