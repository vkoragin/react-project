import { RestaurantPage } from '../pages/restaurant-page/restaurant-page';

const RestaurantLayout = async ({ children, params }) => {
  const { restaurantId } = await params;
  return (
    <RestaurantPage restaurantId={restaurantId}>{children}</RestaurantPage>
  );
};

export default RestaurantLayout;
