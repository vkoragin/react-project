import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectDishById } from '../../redux/entities/menu/slice';
import { Ingredients } from '../../components/ingredients/ingredients';
import { DishCounter } from '../../components/dish-conter/dish-counter';

export const DishPage = () => {
  const { dishId } = useParams();
  const { name, ingredients, price } = useSelector((state) =>
    selectDishById(state, dishId)
  );

  return (
    <section>
      <h3>{name}</h3>
      <Ingredients ingredients={ingredients} />
      <p>Price: {price} $</p>
      <DishCounter id={dishId} />
    </section>
  );
};
