import {
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_ACTION,
  CLEAR_FORM_ACTION,
} from './actions';
import { DEFAULT_FROM_VALUE } from './consts';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_RATING_ACTION:
      return { ...state, rating: payload };
    case CLEAR_FORM_ACTION:
      return { ...DEFAULT_FROM_VALUE };
    default:
      return state;
  }
};
