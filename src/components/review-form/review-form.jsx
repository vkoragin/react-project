import { Counter } from '../counter/counter';
import { Button } from '../Button/button';
import { useReviewForm } from './use-review-form';

export const ReviewForm = () => {
  const {
    name,
    text,
    rating,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
  } = useReviewForm();

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
