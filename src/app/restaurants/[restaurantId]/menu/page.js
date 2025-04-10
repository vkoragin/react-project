import { MenuPage } from '../../../../components/pages/menu-page/menu-page';

const MenuPageWrapper = async ({ params }) => {
  const { restaurantId } = await params;
  return <MenuPage restaurantId={restaurantId} />;
};

export default MenuPageWrapper;
