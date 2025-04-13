import { Dishs } from '../../dishs/dishs';
import { getMenu } from '../../../servicies/get-menu';

export const MenuPage = async ({ restaurantId }) => {
  const menu = await getMenu(restaurantId);

  if (!menu.length) {
    return;
  }

  return (
    <>
      <h3>Меню</h3>
      <Dishs menu={menu} />
    </>
  );
};
