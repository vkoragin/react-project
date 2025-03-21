import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';
import styles from './restaurant.module.css';

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <section className={styles.restaurant}>
      <h2>{name}</h2>
      {!!menu.length && <Menu menu={menu} />}
      {!!reviews.length && <Reviews reviews={reviews} />}
      <ReviewForm />
    </section>
  );
};
