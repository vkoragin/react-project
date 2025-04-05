import styles from './dish.module.css';
import { NavLink } from 'react-router';
import { DishCounter } from '../dish-conter/dish-counter';

export const Dish = ({ dish }) => {
  const { id, name } = dish;

  return (
    <div className={styles.dish}>
      <NavLink to={`/dish/${id}`}>{name}</NavLink>
      <DishCounter id={id} />
    </div>
  );
};
