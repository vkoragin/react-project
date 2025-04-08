import { useParams, Outlet } from 'react-router';
import styles from './restaurant-page.module.css';
import { RestaurantNav } from '../../restaurant-nav/restaurant-nav';
import { useGetRestaurantQuery } from '../../../redux/servicies/api';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const {
    data: restaurant,
    isLoading,
    isError,
  } = useGetRestaurantQuery(restaurantId);

  if (isLoading) {
    return '...loading';
  }

  if (isError) {
    return 'ERROR';
  }

  return (
    <section className={styles.restaurant}>
      <div className={styles.wrapper}>
        <h2>{restaurant.name}</h2>
      </div>
      <RestaurantNav />
      <Outlet />
    </section>
  );
};
