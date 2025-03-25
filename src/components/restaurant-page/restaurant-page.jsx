import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Restaurant } from '../restaurant/restaurant';
import { RestaurantsTabContainer } from '../restaurants-tab/restaurants-tab-container';
import { selectRestaurantsIds } from '../../redux/entities/restaurant/slice';
import styles from './restaurant-page.module.css';

export const RestaurantPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  const handleSetActiveRestaurantsId = useCallback(
    (id) => {
      if (activeRestaurantId === id) {
        return;
      }

      setActiveRestaurantId(id);
    },
    [activeRestaurantId]
  );

  return (
    <section className={styles.restaurantPage}>
      <nav>
        {restaurantsIds.map((id) => (
          <RestaurantsTabContainer
            key={id}
            id={id}
            isActive={id === activeRestaurantId}
            onClick={() => handleSetActiveRestaurantsId(id)}
          />
        ))}
      </nav>

      {!!activeRestaurantId && (
        <Restaurant key={activeRestaurantId} id={activeRestaurantId} />
      )}
    </section>
  );
};
