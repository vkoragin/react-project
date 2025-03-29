import { use } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from '../../components/menu/menu';
import { Reviews } from '../../components/reviews/reviews';
import { ReviewForm } from '../../components/review-form/review-form';
import { UserContext } from '../../components/user-context';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import styles from './restaurant-page.module.css';
import { useParams } from 'react-router';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { name, menu, reviews } = restaurant;

  const { user } = use(UserContext);

  return (
    <section className={styles.restaurant}>
      <div className={styles.wrapper}>
        <h2>{name}</h2>
      </div>
      {!!menu.length && (
        <div className={styles.wrapper}>
          <Menu menu={menu} />
        </div>
      )}
      {!!reviews.length && (
        <div className={styles.wrapper}>
          <Reviews reviews={reviews} />
        </div>
      )}
      {!!user && (
        <div className={styles.wrapper}>
          <ReviewForm />
        </div>
      )}
    </section>
  );
};
