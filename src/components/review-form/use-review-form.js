import { useReducer, useCallback } from 'react';
import { MAX, MIN, DEFAULT_FORM_VALUE } from './consts';
import {
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_ACTION,
  CLEAR_FORM_ACTION,
} from './actions';
import { reducer } from './reducer';
import { useAddReviewMutation } from '../../redux/servicies/api';
import { useParams } from 'react-router';

export const useReviewForm = () => {
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

  const { restaurantId } = useParams();

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();

  const handleSubmit = (review) => {
    addReview({ restaurantId, review });
  };

  return {
    name,
    text,
    rating,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
    isAddReviewLoading,
    handleSubmit,
  };
};
