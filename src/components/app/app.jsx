import { useState } from 'react';
import { Layout } from '../layout/layout';
import { restaurants } from '../../mocks/restaurants';
import { Restaurant } from '../restaurant/restaurant';

export const App = () => {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  const handleChooseRestaurant = (e, restaurantIndex) => {
    e.preventDefault();
    setRestaurant(restaurants[restaurantIndex]);
  };

  return (
    <Layout>
      <section>
        <nav
          style={{
            display: 'flex',
            borderLeft: 'solid 1px black',
            borderBottom: 'none',
          }}
        >
          {restaurants.map(({ id, name }, i) => (
            <a
              key={id}
              href="/"
              onClick={(e) => handleChooseRestaurant(e, i)}
              style={{
                padding: '8px',
                textDecoration: 'none',
                borderRight: 'solid 1px black',
                borderTop: 'solid 1px black',
                color: 'black',
              }}
            >
              {name}
            </a>
          ))}
        </nav>

        {restaurant && <Restaurant restaurant={restaurant} />}
      </section>
    </Layout>
  );
};
