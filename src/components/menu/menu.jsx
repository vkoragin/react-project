import { Dish } from '../dish/dish';

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li
            key={id}
            style={{ display: 'flex', gap: '8px', paddingBottom: '8px' }}
          >
            <Dish name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};
