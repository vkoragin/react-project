import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectDishById } from '../../redux/entities/menu/slice';
import { Ingredients } from '../../components/ingredients/ingredients';
import { DishCounter } from '../../components/dish-conter/dish-counter';
import { useRequest } from '../../redux/hooks/use-request';
import { getDish } from '../../redux/entities/dish/get-dish';

export const DishPage = () => {
  const { dishId } = useParams();
  const requestStatus = useRequest(getDish, dishId);
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (dish) {
    return (
      <section>
        <h3>{dish.name}</h3>
        <Ingredients ingredients={dish.ingredients} />
        <p>Price: {dish.price} $</p>
        <DishCounter id={dish.dishId} />
      </section>
    );
  }

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return 'loading...';
  }

  if (requestStatus === 'rejected') {
    return 'error';
  }
};
