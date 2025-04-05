import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  tagTypes: ['reviews'],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => '/restaurants',
    }),
    getRestaurant: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getUsers: builder.query({
      query: () => '/users',
    }),
    getReviews: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: 'reviews', id: 'all' }],
    }),
    getMenu: builder.query({
      query: (restaurantId) => `dishes?restaurantId=${restaurantId}`,
    }),
    getDish: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'reviews', id: 'all' }],
    }),
    changeReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: 'PATCH',
      }),
      invalidatesTags: [{ type: 'reviews', id: 'all' }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useLazyGetRestaurantsQuery,
  useGetUsersQuery,
  useGetReviewsQuery,
  useGetMenuQuery,
  useGetDishQuery,
  useAddReviewMutation,
  useChangeReviewMutation,
} = api;
