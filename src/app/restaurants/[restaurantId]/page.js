import { RestaurantPage } from '../../../components/pages/restaurant-page/restaurant-page';

const RestaurantPageWrapper = async ({ children, params }) => {
  const { restaurantId } = await params;
  return (
    <RestaurantPage restaurantId={restaurantId}>{children}</RestaurantPage>
  );
};

export default RestaurantPageWrapper;
