import { getRestaurants } from '../../../servicies/get-restaurants';
import RestaurantLayout from '../../../components/layout-restaurant/layout-restaurnt';

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;

  const restaurants = await getRestaurants();

  const restaurant = restaurants.find(({ id }) => restaurantId === id);

  return {
    title: restaurant.name,
  };
};

export default RestaurantLayout;
