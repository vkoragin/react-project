import { RestaurantsTabContainer } from '../../restaurants-tab/restaurants-tab-container';
import { getRestaurants } from '../../../servicies/get-restaurants';

export const RestaurantsPage = async ({ children }) => {
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return (
    <section>
      <nav>
        {restaurants.map(({ id, name }) => (
          <RestaurantsTabContainer key={id} id={id} name={name} />
        ))}
      </nav>
      {children}
    </section>
  );
};
