import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';
import { ReviewForm } from '../review-form/review-form';

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <section
      style={{ border: 'solid 1px black', padding: '8px', width: '30%' }}
    >
      <h2>{name}</h2>
      {!!menu.length && <Menu menu={menu} />}
      {!!reviews.length && <Reviews reviews={reviews} />}
      <ReviewForm />
    </section>
  );
};
