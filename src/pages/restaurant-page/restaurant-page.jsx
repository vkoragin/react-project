import { useSelector } from 'react-redux';
import { useParams, Outlet } from 'react-router';
import styles from './restaurant-page.module.css';
import { RestaurantNav } from '../../components/restaurant-nav/restaurant-nav';
import { useRequest } from '../../redux/hooks/use-request';
import { getRestaurant } from '../../redux/entities/restaurant/get-restaurant';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getRestaurant, restaurantId);
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return 'loading...';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  return (
    <>
      {restaurant && (
        <section className={styles.restaurant}>
          <div className={styles.wrapper}>
            <h2>{restaurant.name}</h2>
          </div>
          <RestaurantNav />
          <Outlet />
        </section>
      )}
    </>
  );
};
