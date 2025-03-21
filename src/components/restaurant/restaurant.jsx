import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';
import styles from './restaurant.module.css';

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

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
      <div className={styles.wrapper}>
        <ReviewForm />
      </div>
    </section>
  );
};
