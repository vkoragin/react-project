import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../mocks/normalized-mock';

const initialState = {
  reviews: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: 'reviewsSlice',
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.reviews[id],
  },
});

export const { selectReviewById } = reviewsSlice.selectors;
