import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Dishs } from '../../components/dishs/dishs';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <>
      <h3>Меню</h3>
      <Dishs menu={menu} />
    </>
  );
};
