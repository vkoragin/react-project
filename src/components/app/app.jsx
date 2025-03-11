import { useState } from 'react';
import { Layout } from '../layout/layout';
import { restaurants } from '../../mocks/restaurants';
import { Restaurant } from '../restaurant/restaurant';

export const App = () => {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  const handleChooseRestaurant = (e, id) => {
    e.preventDefault();
    const viewRestorant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    setRestaurant(viewRestorant);
  };

  return (
    <Layout>
      <>
        <nav
          style={{
            display: 'flex',
            borderLeft: 'solid 1px black',
            borderBottom: 'none',
          }}
        >
          {restaurants.map(({ id, name }) => (
            <button
              key={id}
              type="button"
              onClick={(e) => handleChooseRestaurant(e, id)}
              style={{
                padding: '8px',
                color: 'black',
                fontWeight: id === restaurant.id ? 'bold' : 'normal',
                borderRight: 'solid 1px black',
                borderTop: 'solid 1px black',
                borderBottom: 'none',
                borderLeft: 'none',
                background: 'none',
              }}
            >
              {name}
            </button>
          ))}
        </nav>

        {!!restaurant && <Restaurant restaurant={restaurant} />}
      </>
    </Layout>
  );
};
