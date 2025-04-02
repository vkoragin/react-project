import { useSelector } from 'react-redux';
import { RestaurantsTabContainer } from '../../components/restaurants-tab/restaurants-tab-container';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/slice';
import { Outlet } from 'react-router';
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants';
import { useRequest } from '../../redux/hooks/use-request';

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantsIds);

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return 'loading...';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }

  return (
    <section>
      <nav>
        {restaurantsIds.map((id) => (
          <RestaurantsTabContainer key={id} id={id} />
        ))}
      </nav>
      <Outlet />
    </section>
  );
};
