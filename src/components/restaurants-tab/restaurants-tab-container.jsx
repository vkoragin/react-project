import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { NavigationLink } from '../navigation-link/navigation-link';

export const RestaurantsTabContainer = ({ id }) => {
  const { name } = useSelector((state) => selectRestaurantById(state, id));

  return <NavigationLink to={`/restaurants/${id}`} text={name} />;
};
