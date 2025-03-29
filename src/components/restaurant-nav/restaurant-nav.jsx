import { NavLink } from 'react-router';
import styles from './restaurant-nav.module.css';
import { LINKS } from './consts';
import classNames from 'classnames';

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
