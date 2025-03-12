import { useState } from 'react';
import { MAX, MIN } from './consts';

export const useCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < MAX) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > MIN) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
};
