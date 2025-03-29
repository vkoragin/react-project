import { useSelector } from 'react-redux';
import { RestaurantsTabContainer } from '../../components/restaurants-tab/restaurants-tab-container';
import { selectRestaurantsIds } from '../../redux/entities/restaurant/slice';
import { Outlet } from 'react-router';

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

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
