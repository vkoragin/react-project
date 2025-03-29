import { Dish } from '../dish/dish';

export const Dishs = ({ menu }) => {
  return (
    <ul>
      {menu.map((id) => (
        <li key={id}>
          <Dish id={id} />
        </li>
      ))}
    </ul>
  );
};
