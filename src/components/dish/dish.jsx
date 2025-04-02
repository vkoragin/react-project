import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/menu/slice';
import styles from './dish.module.css';
import { NavLink } from 'react-router';
import { DishCounter } from '../dish-conter/dish-counter';

export const Dish = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { name } = dish;

  return (
    <div className={styles.dish}>
      <NavLink to={`/dish/${id}`}>{name}</NavLink>
      <DishCounter id={id} />
    </div>
  );
};
