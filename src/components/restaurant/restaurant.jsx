import { use } from 'react';
import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';
import { UserContext } from '../user-context';
import styles from './restaurant.module.css';

export const Restaurant = ({ restaurant }) => {
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
