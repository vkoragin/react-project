import { useCallback, useState } from 'react';
import { MAX, MIN } from './consts';

export const useCount = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => (prev < MAX ? prev + 1 : prev));
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => (prev > MIN ? prev - 1 : prev));
  }, []);

  return {
    count,
    increment,
    decrement,
  };
};
