import { Dish } from '../dish/dish';

export const Dishs = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
};
