import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { Reviews } from '../../components/reviews/reviews';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <>
      <h3>Отзывы</h3>
      <Reviews reviews={reviews} />
    </>
  );
};
