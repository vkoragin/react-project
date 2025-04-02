import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getReviews } from './get-reviews';

export const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const { selectRequestStatus } = reviewsSlice.selectors;

const selectReviewsSlice = (state) => state.reviews;

export const { selectById: selectReviewById, selectIds: selectReviewsIds } =
  entityAdapter.getSelectors(selectReviewsSlice);
