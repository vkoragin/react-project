import { use } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Review } from '../../components/review/review';
import { UserContext } from '../../components/user-context';
import { ReviewForm } from '../../components/review-form/review-form';
import { selectRestaurantById } from '../../redux/entities/restaurant/slice';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { user } = use(UserContext);

  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {restaurant.reviews.map((id) => (
          <li key={id}>
            <Review id={id} />
          </li>
        ))}
      </ul>

      {!!user && (
        <div>
          <ReviewForm />
        </div>
      )}
    </>
  );
};
