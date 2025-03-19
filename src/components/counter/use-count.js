import { useCallback, useState } from 'react';
import { MAX, MIN } from './consts';

export const useCount = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    if (count < MAX) {
      setCount((prev) => prev + 1);
    }
  }, [count]);

  const decrement = useCallback(() => {
    if (count > MIN) {
      setCount((prev) => prev - 1);
    }
  }, [count]);

  return {
    count,
    increment,
    decrement,
  };
};
