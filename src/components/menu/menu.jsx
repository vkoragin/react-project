import { Dish } from '../dish/dish';
import styles from './menu.module.css';

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id} className={styles.menuItem}>
            <Dish name={name} />
          </li>
        ))}
      </ul>
    </>
  );
};
