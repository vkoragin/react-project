import { Dish } from '../dish/dish';

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((id) => (
          <li key={id}>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
