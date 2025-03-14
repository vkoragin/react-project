import { useReducer } from 'react';
import { MAX, MIN, DEFAULT_FORM_VALUE } from './consts';
import {
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_ACTION,
  CLEAR_FORM_ACTION,
} from './actions';
import { reducer } from './reducer';

export const useReviewForm = () => {
  const [{ name, text, rating }, dispatch] = useReducer(
    reducer,
    DEFAULT_FORM_VALUE
  );

  const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name });
  const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text });
  const incrementRating = () => {
    if (rating < MAX) {
      dispatch({ type: SET_RATING_ACTION, payload: rating + 1 });
    }
  };
  const decrementRating = () => {
    if (rating > MIN) {
      dispatch({ type: SET_RATING_ACTION, payload: rating - 1 });
    }
  };
  const clearForm = () => dispatch({ type: CLEAR_FORM_ACTION });

  return {
    name,
    text,
    rating,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
  };
};
