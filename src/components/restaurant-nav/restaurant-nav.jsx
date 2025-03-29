import { NavLink } from 'react-router';
import styles from './restaurant-nav.module.css';
import classNames from 'classnames';

const LINKS = [
  { path: 'menu', name: 'Меню' },
  { path: 'reviews', name: 'Отзывы' },
];

export const RestaurantNav = () => {
  return (
    <nav>
      {LINKS.map(({ path, name }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => classNames(isActive && styles.isActive)}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};
