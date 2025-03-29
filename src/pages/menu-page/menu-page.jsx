import { useSelector } from 'react-redux';
import { Dish } from '../../components/dish/dish';
import { useParams } from 'react-router';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';

export const MenuPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <>
      <h3>Меню</h3>
      <ul>
        {restaurant.menu.map((id) => (
          <li key={id}>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
