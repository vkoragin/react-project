import { Button } from '../button/button';
import { ReviewForm } from '../review-form/review-form';
import { useReview } from './use-review';

export const Review = ({ review, maintainerId, restaurantId, users }) => {
  const { isEdit, text, name, canChange, handleSetEdit } = useReview({
    review,
    maintainerId,
    users,
  });

  if (!name) {
    return null;
  }

  return (
    <>
      {isEdit ? (
        <ReviewForm review={review} restaurantId={restaurantId} />
      ) : (
        <>
          {`${name}: ${text}`}{' '}
          {canChange && (
            <Button onClick={handleSetEdit} type="button" text="Изменить" />
          )}
        </>
      )}
    </>
  );
};
