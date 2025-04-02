import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getMenu } from './get-menu';

export const entityAdapter = createEntityAdapter();

export const menuSlice = createSlice({
  name: 'menu',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getMenu.fulfilled, (state, { payload }) => {
      entityAdapter.addMany(state, payload);
    }),
});

export const { selectRequestStatus } = menuSlice.selectors;

const selectMenuSlice = (state) => state.menu;

export const { selectById: selectDishById, selectIds: selectMenuIds } =
  entityAdapter.getSelectors(selectMenuSlice);
