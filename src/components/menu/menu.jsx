import { Counter } from '../counter/counter';

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {!!menu.length &&
          menu.map(({ id, name }) => (
            <li
              key={id}
              style={{ display: 'flex', gap: '8px', paddingBottom: '8px' }}
            >
              {name} <Counter />
            </li>
          ))}
      </ul>
    </>
  );
};
