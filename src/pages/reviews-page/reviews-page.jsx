import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Reviews } from '../../components/reviews/reviews';
import { useRequest } from '../../redux/hooks/use-request';
import { getReviews } from '../../redux/entities/reviews/get-reviews';
import { selectReviewsIds } from '../../redux/entities/reviews/slice';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getReviews, restaurantId);
  const reviews = useSelector(selectReviewsIds);

  if (requestStatus === 'idle' || requestStatus === 'pending') {
    return 'loading...';
  }

  if (requestStatus === 'rejected') {
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
