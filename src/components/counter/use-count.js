import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectAmountByRestaurantId,
} from '../../redux/entities/cart/slice';

export const useCount = (id) => {
  const dispatch = useDispatch();

  const count =
    useSelector((state) => selectAmountByRestaurantId(state, id)) || 0;

  const increment = useCallback(() => dispatch(addToCart(id)), [dispatch, id]);

  const decrement = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id]
  );

  return {
    count,
    increment,
    decrement,
  };
};
