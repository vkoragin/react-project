import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../mocks/normalized-mock';

const initialState = {
  menu: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
};

export const dishSlice = createSlice({
  name: 'dishSlice',
  initialState,
  selectors: {
    selectDishById: (state, id) => state.menu[id],
  },
});

export const { selectDishById } = dishSlice.selectors;
