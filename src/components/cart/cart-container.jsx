import { Cart } from './cart';
import { getRestaurants } from '../../servicies/get-restaurants';

export const CartContainer = async () => {
  const restaurants = await getRestaurants();

  return <Cart restaurants={restaurants} />;
};
