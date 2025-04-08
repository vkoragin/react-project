import { RestaurantPage } from '../../../../components/pages/restaurant-page/restaurant-page';

const MenuLayout = async ({ children }) => {
  return <RestaurantPage>{children}</RestaurantPage>;
};

export default MenuLayout;
