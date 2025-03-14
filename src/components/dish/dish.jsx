import { Counter } from '../counter/counter';
import { useCount } from '../counter/use-count';

export const Dish = ({ name }) => {
  const { count, increment, decrement } = useCount();

  return (
    <>
      {name}{' '}
      <Counter count={count} increment={increment} decrement={decrement} />
    </>
  );
};
