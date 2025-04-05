import { Counter } from '../counter/counter';
import { Button } from '../button/button';
import { useReviewForm } from './use-review-form';
import styles from './review-form.module.css';

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
    isAddReviewLoading,
    handleSubmit,
  } = useReviewForm();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h3>Добавить отзыв</h3>
      <label className={styles.label}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Имя</span>
      </label>
      <label className={styles.label}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>Текст</span>
      </label>

      <div className={styles.counterWrapper}>
        <Counter
          count={rating}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="button" onClick={clearForm} text="Очистить" />
        <Button
          type="submit"
          onClick={() =>
            handleSubmit({ text, rating, user: 'hr83h29h9h9u12h9213' })
          }
          text="Добавить"
          isActive={isAddReviewLoading}
        />
      </div>
    </form>
  );
};
