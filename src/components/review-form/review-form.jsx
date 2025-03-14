import { useReducer } from 'react';
import { Counter } from '../counter/counter';
import { Button } from '../Button/button';
import { MAX, MIN, DEFAULT_FROM_VALUE } from './consts';
import {
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_ACTION,
  CLEAR_FORM_ACTION,
} from './actions';
import { reducer } from './reducer';

export const ReviewForm = () => {
  const [{ name, text, rating }, dispatch] = useReducer(
    reducer,
    DEFAULT_FROM_VALUE
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

  return (
    <form>
      <h3>Добавить отзыв</h3>
      <label style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Имя</span>
      </label>
      <label style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>Текст</span>
      </label>

      <div style={{ marginBottom: '4px' }}>
        <Counter
          count={rating}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </div>

      <Button type="button" onClick={clearForm} text="Очистить" />
    </form>
  );
};
