import { Cart } from './cart';
import { getMenu } from '../../servicies/get-menu';

export const CartContainer = async () => {
  const menu = await getMenu();

  return <Cart menu={menu} />;
};
