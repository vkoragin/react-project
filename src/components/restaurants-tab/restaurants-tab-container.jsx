import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { NavLink } from 'react-router';
import styles from './restaurants-tab.module.css';
import classNames from 'classnames';

export const RestaurantsTabContainer = ({ id }) => {
  const { name } = useSelector((state) => selectRestaurantById(state, id));

  return (
    <NavLink
      key={id}
      to={`/restaurants/${id}`}
      className={({ isActive }) => classNames(isActive && styles.isActive)}
    >
      {name}
    </NavLink>
  );
};
