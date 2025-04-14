import { useMemo, useCallback } from 'react';
import { addReviewAction } from '../../actions/add-review-action';
import { changeReviewAction } from '../../actions/change-review-action';

export const useReviewForm = ({ review, restaurantId }) => {
  const buttonText = useMemo(
    () => (review ? 'Изменить' : 'Добавить'),
    [review]
  );

  const headerText = useMemo(
    () => (review ? 'Изменить отзыв' : 'Добавить отзыв'),
    [review]
  );

  const submitFormAction = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: '',
          rating: 5,
        };
      }

      const text = formData.get('text');
      const rating = formData.get('rating');

      const review = { text, rating };

      return review
        ? await changeReviewAction({ restaurantId, review })
        : await addReviewAction({ restaurantId, review });
    },
    [restaurantId]
  );

  return {
    headerText,
    buttonText,
    submitFormAction,
  };
};
