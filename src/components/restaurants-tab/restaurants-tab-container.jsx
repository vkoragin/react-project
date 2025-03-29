import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { Button } from '../button/button';

export const RestaurantsTabContainer = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <Button
      key={id}
      type="button"
      text={name}
      onClick={onClick}
      isActive={isActive}
    />
  );
};
