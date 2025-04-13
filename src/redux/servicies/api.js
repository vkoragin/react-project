import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  tagTypes: ['reviews'],
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: 'POST',
      }),
    }),
    changeReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: 'PATCH',
      }),
    }),
  }),
});

export const { useAddReviewMutation, useChangeReviewMutation } = api;
