import { restaurants } from '../../mocks/restaurants';
import { Restaurant } from '../restaurant/restaurant';
import { Button } from '../Button/button';
import { useRestaurantPage } from './use-restaurant-page';

export const RestaurantPage = () => {
  const { restaurant, handleChooseRestaurant } = useRestaurantPage();

  return (
    <>
      <nav
        style={{
          display: 'flex',
          borderLeft: 'solid 1px black',
          borderBottom: 'none',
        }}
      >
        {restaurants.map(({ id, name }) => (
          <Button
            key={id}
            isActive={id === restaurant.id}
            onClick={() => handleChooseRestaurant(id)}
            text={name}
          />
        ))}
      </nav>

      {!!restaurant && <Restaurant restaurant={restaurant} />}
    </>
  );
};
