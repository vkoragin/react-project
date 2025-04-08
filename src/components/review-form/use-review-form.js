import { useReducer, useCallback, useMemo } from 'react';
import { MAX, MIN, DEFAULT_FORM_VALUE } from './consts';
import {
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_ACTION,
  CLEAR_FORM_ACTION,
} from './actions';
import { reducer } from './reducer';
import {
  useAddReviewMutation,
  useChangeReviewMutation,
} from '../../redux/servicies/api';

export const useReviewForm = ({ review, restaurantId }) => {
  const [{ name, text, rating }, dispatch] = useReducer(
    reducer,
    DEFAULT_FORM_VALUE
  );

  const setName = useCallback(
    (name) => dispatch({ type: SET_NAME_ACTION, payload: name }),
    []
  );

  const setText = useCallback(
    (text) => dispatch({ type: SET_TEXT_ACTION, payload: text }),
    []
  );

  const incrementRating = useCallback(() => {
    if (rating < MAX) {
      dispatch({ type: SET_RATING_ACTION, payload: rating + 1 });
    }
  }, [rating]);

  const decrementRating = useCallback(() => {
    if (rating > MIN) {
      dispatch({ type: SET_RATING_ACTION, payload: rating - 1 });
    }
  }, [rating]);

  const clearForm = useCallback(
    () => dispatch({ type: CLEAR_FORM_ACTION }),
    []
  );

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const [changeReview, { isLoading: isChangeReviewLoading }] =
    useChangeReviewMutation();

  const isSubmitDisabled = useMemo(
    () => isAddReviewLoading || isChangeReviewLoading,
    [isAddReviewLoading, isChangeReviewLoading]
  );

  const body = useMemo(() => {
    return { text, rating, user: review?.userId };
  }, [text, rating, review]);

  const buttonText = useMemo(
    () => (review ? 'Изменить' : 'Добавить'),
    [review]
  );

  const headerText = useMemo(
    () => (review ? 'Изменить отзыв' : 'Добавить отзыв'),
    [review]
  );

  const handleAddReview = useCallback(
    (review) => {
      addReview({ restaurantId, review });
    },
    [addReview, restaurantId]
  );

  const handleChangeReview = useCallback(
    (review) => {
      changeReview({ restaurantId, review });
    },
    [changeReview, restaurantId]
  );

  const handleSubmit = useCallback(
    () => (review ? handleChangeReview(body) : handleAddReview(body)),
    [body, review, handleChangeReview, handleAddReview]
  );

  return {
    name,
    text,
    rating,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
    isSubmitDisabled,
    handleSubmit,
    headerText,
    buttonText,
  };
};
