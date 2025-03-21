import { Dish } from '../dish/dish';

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id}>
            <Dish name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};
