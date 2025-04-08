import { useParams } from 'react-router';
import { Reviews } from '../../reviews/reviews';
import {
  useGetUsersQuery,
  useGetReviewsQuery,
} from '../../../redux/servicies/api';

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  const { isLoading: isUsersLoading, isError: isUsersError } =
    useGetUsersQuery();
  const {
    isFetching: isReviewsLoading,
    isError: isReviewsError,
    data: reviews,
  } = useGetReviewsQuery(restaurantId);

  const isLoading = isUsersLoading || isReviewsLoading;

  const isError = isUsersError || isReviewsError;

  if (isLoading) {
    return 'loading...';
  }

  if (isError) {
    return 'ERROR';
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
