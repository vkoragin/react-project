import { useCallback, useState } from 'react';
import { MAX, MIN } from './consts';

export const useCount = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    if (count < MAX) {
      setCount(count + 1);
    }
  }, [count]);

  const decrement = useCallback(() => {
    if (count > MIN) {
      setCount(count - 1);
    }
  }, [count]);

  return {
    count,
    increment,
    decrement,
  };
};
