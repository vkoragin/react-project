import { useState, useCallback } from 'react';
import { restaurants } from '../../mocks/restaurants';

export const useRestaurantPage = () => {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  const handleChooseRestaurant = useCallback((id) => {
    const viewRestorant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    setRestaurant(viewRestorant);
  }, []);

  return {
    restaurant,
    handleChooseRestaurant,
  };
};
