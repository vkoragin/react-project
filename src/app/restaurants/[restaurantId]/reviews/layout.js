import { RestaurantPage } from '../../../../components/pages/restaurant-page/restaurant-page';

const ReviewLayout = async ({ children, params }) => {
  const { restaurantId } = await params;

  return (
    <RestaurantPage restaurantId={restaurantId}>{children}</RestaurantPage>
  );
};

export default ReviewLayout;
