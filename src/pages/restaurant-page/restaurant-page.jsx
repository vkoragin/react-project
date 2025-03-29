import { useSelector } from 'react-redux';
import { useParams, NavLink, Outlet } from 'react-router';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import styles from './restaurant-page.module.css';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { name } = restaurant;

  return (
    <section className={styles.restaurant}>
      <div className={styles.wrapper}>
        <h2>{name}</h2>
      </div>
      <nav>
        <NavLink to={'menu'}>Меню</NavLink>
        <NavLink to={'reviews'}>Отзывы</NavLink>
      </nav>
      <Outlet />
    </section>
  );
};
