import { useParams } from 'react-router';
import { Dishs } from '../../dishs/dishs';
import { useGetMenuQuery } from '../../../redux/servicies/api';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { isLoading, isError, data: menu } = useGetMenuQuery(restaurantId);

  if (isLoading) {
    return 'loading...';
  }

  if (isError) {
    return 'ERROR';
  }

  return (
    <>
      {!!menu.length && (
        <>
          <h3>Меню</h3>
          <Dishs menu={menu} />
        </>
      )}
    </>
  );
};
