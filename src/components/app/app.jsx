import { useState } from 'react';
import { Layout } from '../layout/layout';
import { restaurants } from '../../mocks/restaurants';
import { Restaurant } from '../restaurant/restaurant';

export const App = () => {
  const [restaurantIndex, setRestaurantIndex] = useState(0);

  const handleChooseRestaurant = (e, index) => {
    e.preventDefault();
    setRestaurantIndex(index);
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
                textDecoration: i === restaurantIndex ? 'underline' : 'none',
                borderRight: 'solid 1px black',
                borderTop: 'solid 1px black',
                color: 'black',
              }}
            >
              {name}
            </a>
          ))}
        </nav>

        {!!restaurants[restaurantIndex] && (
          <Restaurant restaurant={restaurants[restaurantIndex]} />
        )}
      </section>
    </Layout>
  );
};
