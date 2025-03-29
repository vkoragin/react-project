import { use } from 'react';
import { useSelector } from 'react-redux';
import { Counter } from '../counter/counter';
import { useCount } from '../counter/use-count';
import { UserContext } from '../user-context';
import { selectDishById } from '../../redux/entities/menu/slice';
import styles from './dish.module.css';

export const Dish = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { name } = dish;
  const { count, increment, decrement } = useCount(id);
  const { user } = use(UserContext);

  return (
    <div className={styles.dish}>
      {name}
      {!!user && (
        <Counter count={count} increment={increment} decrement={decrement} />
      )}
    </div>
  );
};
