import { Ingredients } from '../../ingredients/ingredients';
import { DishCounter } from '../../dish-conter/dish-counter';
import { getDish } from '../../../servicies/get-dish';

export const DishPage = async ({ dishId }) => {
  const dish = await getDish(dishId);

  if (!dish) {
    return;
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
