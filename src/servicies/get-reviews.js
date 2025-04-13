export const getReviews = async (restaurantId) => {
  const result = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
  );

  return result.json();
};
