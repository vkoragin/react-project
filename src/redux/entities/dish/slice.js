import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getDish } from './get-dish';

export const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dish',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getDish.fulfilled, (state, { payload }) => {
      entityAdapter.setOne(state, payload);
    }),
});

export const { selectRequestStatus } = dishSlice.selectors;

const selectDishSlice = (state) => state.dish;

export const { selectById: selecttDishById, selectIds: selectDishIds } =
  entityAdapter.getSelectors(selectDishSlice);
