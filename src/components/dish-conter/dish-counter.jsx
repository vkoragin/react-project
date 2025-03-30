import { use } from 'react';
import { Counter } from '../counter/counter';
import { useCount } from '../counter/use-count';
import { UserContext } from '../user-context';

export const DishCounter = ({ id }) => {
  const { count, increment, decrement } = useCount(id);
  const { user } = use(UserContext);

  if (!user) {
    return null;
  }

  return <Counter count={count} increment={increment} decrement={decrement} />;
};
