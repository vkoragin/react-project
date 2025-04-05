import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Dishs } from '../../components/dishs/dishs';
import { useRequest } from '../../redux/hooks/use-request';
import { getMenu } from '../../redux/entities/menu/get-menu';
import { selectMenuIds } from '../../redux/entities/menu/slice';
import { IDLE, PENDING, REJECTED } from '../../redux/consts';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getMenu, restaurantId);
  const menu = useSelector(selectMenuIds);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return 'loading...';
  }

  if (requestStatus === REJECTED) {
    return 'error';
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
