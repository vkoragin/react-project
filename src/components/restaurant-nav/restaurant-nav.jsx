import { LINKS } from './consts';
import { NavigationLink } from '../navigation-link/navigation-link';

export const RestaurantNav = () => {
  return (
    <nav>
      {LINKS.map(({ path, name }) => (
        <NavigationLink key={path} to={path} text={name} />
      ))}
    </nav>
  );
};
