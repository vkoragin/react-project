import { Button } from '../button/button';
import styles from './counter.module.css';

export const Counter = ({ count, increment, decrement }) => {
  return (
    <div className={styles.counter}>
      <Button onClick={decrement} type="button" text="-" />
      {count}
      <Button onClick={increment} type="button" text="+" />
    </div>
  );
};
