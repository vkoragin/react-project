import { use } from 'react';
import { Counter } from '../counter/counter';
import { useCount } from '../counter/use-count';
import { UserContext } from '../user-context';
import styles from './dish.module.css';

export const Dish = ({ name }) => {
  const { count, increment, decrement } = useCount();
  const { user } = use(UserContext);

  return (
    <div className={styles.dish}>
      {name}{' '}
      {!!user && (
        <Counter count={count} increment={increment} decrement={decrement} />
      )}
    </div>
  );
};
