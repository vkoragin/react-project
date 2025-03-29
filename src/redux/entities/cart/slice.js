import { createSlice, createSelector } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectAmountByRestaurantId: (state, id) => state[id],
  },
});

export const { selectAmountByRestaurantId } = cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;

const selectCartSlice = (state) => state.cartSlice;

export const selectCartItems = createSelector([selectCartSlice], (cart) =>
  Object.keys(cart).reduce((acc, id) => {
    acc.push({ id, amount: cart[id] });

    return acc;
  }, [])
);
