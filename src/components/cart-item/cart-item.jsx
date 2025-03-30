import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/menu/slice';

export const CartItem = ({ id, amount }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { name } = dish;

  return `${name} - ${amount}`;
};
