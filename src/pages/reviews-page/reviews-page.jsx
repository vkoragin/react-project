import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Reviews } from '../../components/reviews/reviews';
import { useRequest } from '../../redux/hooks/use-request';
import { getReviews } from '../../redux/entities/reviews/get-reviews';
import { selectReviewsIds } from '../../redux/entities/reviews/slice';
import { getUsers } from '../../redux/entities/users/get-users';
import { IDLE, PENDING, REJECTED } from '../../redux/consts';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getReviews, restaurantId);
  useRequest(getUsers);
  const reviews = useSelector(selectReviewsIds);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return 'loading...';
  }

  if (requestStatus === REJECTED) {
    return 'error';
  }

  return (
    <>
      {!!reviews.length && (
        <>
          <h3>Отзывы</h3>
          <Reviews reviews={reviews} />
        </>
      )}
    </>
  );
};
