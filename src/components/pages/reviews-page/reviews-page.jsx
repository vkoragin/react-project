import { Reviews } from '../../reviews/reviews';
import { getReviews } from '../../../servicies/get-reviews';
import { getUsers } from '../../../servicies/get-users';

export const ReviewsPage = async ({ restaurantId }) => {
  const reviewsPromise = getReviews(restaurantId);
  const usersPromise = getUsers();

  const [reviews, users] = await Promise.all([reviewsPromise, usersPromise]);

  if (!reviews.length || !users.length) {
    return;
  }

  return (
    <>
      <h3>Отзывы</h3>
      <Reviews reviews={reviews} restaurantId={restaurantId} users={users} />
    </>
  );
};
