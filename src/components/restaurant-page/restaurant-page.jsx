import { restaurants } from '../../mocks/restaurants';
import { Restaurant } from '../restaurant/restaurant';
import { Button } from '../button/button';
import { useRestaurantPage } from './use-restaurant-page';
import styles from './restaurant-page.module.css';

export const RestaurantPage = () => {
  const { restaurant, handleChooseRestaurant } = useRestaurantPage();

  return (
    <section className={styles.restaurantPage}>
      <nav>
        {restaurants.map(({ id, name }) => (
          <Button
            type="button"
            key={id}
            isActive={id === restaurant.id}
            onClick={() => handleChooseRestaurant(id)}
            text={name}
          />
        ))}
      </nav>

      {!!restaurant && <Restaurant restaurant={restaurant} />}
      {!!restaurant && <Restaurant restaurant={restaurant} />}
      {!!restaurant && <Restaurant restaurant={restaurant} />}
      {!!restaurant && <Restaurant restaurant={restaurant} />}
    </section>
  );
};
