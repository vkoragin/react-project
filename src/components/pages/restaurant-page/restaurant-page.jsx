import styles from './restaurant-page.module.css';
import { RestaurantNav } from '../../restaurant-nav/restaurant-nav';
import { getRestaurant } from '../../../servicies/get-restaurant';

export const RestaurantPage = async ({ children, restaurantId }) => {
  const restaurant = await getRestaurant(restaurantId);

  if (!restaurant) {
    return;
  }

  return (
    <section className={styles.restaurant}>
      <div className={styles.wrapper}>
        <h2>{restaurant.name}</h2>
      </div>
      <RestaurantNav restaurantId={restaurantId} />
      {children}
    </section>
  );
};
