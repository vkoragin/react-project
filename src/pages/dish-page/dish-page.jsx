import { use } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectDishById } from '../../redux/entities/menu/slice';
import { useCount } from '../../components/counter/use-count';
import { UserContext } from '../../components/user-context';
import { Counter } from '../../components/counter/counter';

export const DishPage = () => {
  const { dishId } = useParams();
  const { name, ingredients, price } = useSelector((state) =>
    selectDishById(state, dishId)
  );
  const { count, increment, decrement } = useCount(dishId);
  const { user } = use(UserContext);

  return (
    <section>
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={Math.random().toString(16).slice(2)}>{ingredient}</li>
        ))}
      </ul>
      <p>Price: {price} $</p>
      {!!user && (
        <Counter count={count} increment={increment} decrement={decrement} />
      )}
    </section>
  );
};
