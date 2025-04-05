import { NavigationLink } from '../navigation-link/navigation-link';

export const RestaurantsTabContainer = ({ id, name }) => {
  return <NavigationLink to={`/restaurants/${id}`} text={name} />;
};
