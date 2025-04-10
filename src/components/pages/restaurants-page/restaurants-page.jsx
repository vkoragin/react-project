'use client';

import { RestaurantsTabContainer } from '../../restaurants-tab/restaurants-tab-container';
import { useGetRestaurantsQuery } from '../../../redux/servicies/api';

export const RestaurantsPage = ({ children }) => {
  const { data: restaurants, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return 'loading...';
  }

  if (isError) {
    return 'ERROR';
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
