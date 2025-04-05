import { useGetDishQuery } from '../../redux/servicies/api';

export const CartItem = ({ id, amount }) => {
  const { data: dish } = useGetDishQuery(id);

  return dish ? `${dish.name} - ${amount}` : null;
};
