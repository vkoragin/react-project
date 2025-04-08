import { RestaurantPage } from '../../../../components/pages/restaurant-page/restaurant-page';

const MenuLayout = async ({ children, params }) => {
  const { restaurantId } = await params;

  return (
    <RestaurantPage restaurantId={restaurantId}>{children}</RestaurantPage>
  );
};

export default MenuLayout;
