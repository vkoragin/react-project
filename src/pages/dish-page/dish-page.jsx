import { useParams } from 'react-router';
import { Ingredients } from '../../components/ingredients/ingredients';
import { DishCounter } from '../../components/dish-conter/dish-counter';
import { useGetDishQuery } from '../../redux/servicies/api';

export const DishPage = () => {
  const { dishId } = useParams();
  const { data: dish, isLoading, isError } = useGetDishQuery(dishId);

  if (isLoading) {
    return '...loading';
  }

  if (isError) {
    return 'ERROR';
  }

  return (
    <section>
      <h3>{dish.name}</h3>
      <Ingredients ingredients={dish.ingredients} />
      <p>Price: {dish.price} $</p>
      <DishCounter id={dishId} />
    </section>
  );
};
