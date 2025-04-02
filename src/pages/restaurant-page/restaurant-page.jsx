import { useSelector } from 'react-redux';
import { useParams, Outlet } from 'react-router';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import styles from './restaurant-page.module.css';
import { RestaurantNav } from '../../components/restaurant-nav/restaurant-nav';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <section className={styles.restaurant}>
      <div className={styles.wrapper}>
        <h2>{name}</h2>
      </div>
      <RestaurantNav />
      <Outlet />
    </section>
  );
};
