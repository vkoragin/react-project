import { ReviewsPage } from '../../../../components/pages/reviews-page/reviews-page';

const ReviewPageWrapper = async ({ params }) => {
  const { restaurantId } = await params;
  return <ReviewsPage restaurantId={restaurantId} />;
};

export default ReviewPageWrapper;
