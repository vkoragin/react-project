import { Button } from '../button/button';
import { ReviewForm } from '../review-form/review-form';
import { useReview } from './use-review';

export const Review = ({ review, maintainerId }) => {
  const { isEdit, text, name, canChange, handleSetEdit } = useReview({
    review,
    maintainerId,
  });

  if (!name) {
    return null;
  }

  return (
    <>
      {isEdit ? (
        <ReviewForm review={review} />
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
