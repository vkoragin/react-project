import { Counter } from '../counter/counter';
import { useCount } from '../counter/use-count';
import styles from './dish.module.css';

export const Dish = ({ name }) => {
  const { count, increment, decrement } = useCount();

  return (
    <div className={styles.dish}>
      {name}{' '}
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
  );
};
