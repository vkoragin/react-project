import { LINKS } from './consts';
import { NavigationLink } from '../navigation-link/navigation-link';

export const RestaurantNav = ({ restaurantId }) => {
  return (
    <nav>
      {LINKS.map(({ path, name }) => (
        <NavigationLink
          key={path}
          to={`/restaurants/${restaurantId}/${path}`}
          text={name}
        />
      ))}
    </nav>
  );
};
