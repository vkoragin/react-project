import { RestaurantsTabContainer } from '../../components/restaurants-tab/restaurants-tab-container';
import { Outlet } from 'react-router';
import { useGetRestaurantsQuery } from '../../redux/servicies/api';

export const RestaurantsPage = () => {
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
      <Outlet />
    </section>
  );
};
