import { Menu } from '../menu/menu';
import { Reviews } from '../reviews/reviews';

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  return (
    <section
      style={{ border: 'dashed 1px black', padding: '8px', width: '30%' }}
    >
      <h2>{name}</h2>
      <Menu menu={menu} />
      {!!reviews.length && <Reviews reviews={reviews} />}
    </section>
  );
};
