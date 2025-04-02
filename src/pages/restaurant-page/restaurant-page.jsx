import { useSelector } from 'react-redux';
import { useParams, Outlet } from 'react-router';
import styles from './restaurant-page.module.css';
import { RestaurantNav } from '../../components/restaurant-nav/restaurant-nav';
import { useRequest } from '../../redux/hooks/use-request';
import { getRestaurant } from '../../redux/entities/restaurant/get-restaurant';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { IDLE, PENDING, REJECTED } from '../../redux/consts';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getRestaurant, restaurantId);
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (restaurant) {
    <section className={styles.restaurant}>
      <div className={styles.wrapper}>
        <h2>{restaurant.name}</h2>
      </div>
      <RestaurantNav />
      <Outlet />
    </section>;
  }

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return 'loading...';
  }

  if (requestStatus === REJECTED) {
    return 'error';
  }
};
