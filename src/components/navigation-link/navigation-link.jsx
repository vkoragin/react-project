import { NavLink } from 'react-router';
import styles from './navigation-link.module.css';
import classNames from 'classnames';

export const NavigationLink = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(isActive && styles.isActive)}
    >
      {text}
    </NavLink>
  );
};
