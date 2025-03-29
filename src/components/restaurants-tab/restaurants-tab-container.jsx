import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';
import { NavLink } from 'react-router';

export const RestaurantsTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name } = restaurant;

  return (
    <NavLink key={id} type="button" to={`/restaurants/${id}`}>
      {name}
    </NavLink>
  );
};
