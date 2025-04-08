import styles from './dish.module.css';
import Link from 'next/link';
import { DishCounter } from '../dish-conter/dish-counter';

export const Dish = ({ dish }) => {
  const { id, name } = dish;

  return (
    <div className={styles.dish}>
      <Link href={`/dish/${id}`}>{name}</Link>
      <DishCounter id={id} />
    </div>
  );
};
