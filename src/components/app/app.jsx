import { useState } from 'react';
import { Layout } from '../layout/layout';
import { restaurants } from '../../mocks/restaurants';
import { Restaurant } from '../restaurant/restaurant';

export const App = () => {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  const handleChooseRestaurant = (restaurantIndex) => {
    setRestaurant(restaurants[restaurantIndex]);
  };

  return (
    <Layout>
      <section>
        <nav>
          {restaurants.map(({ id, name }, i) => (
            <button key={id} onClick={() => handleChooseRestaurant(i)}>
              {name}
            </button>
          ))}
        </nav>

        {restaurant && <Restaurant restaurant={restaurant} />}
      </section>
    </Layout>
  );
};
