import { useActionState, useCallback, useRef } from 'react';
import { Button } from '../button/button';
import { useReviewForm } from './use-review-form';
import styles from './review-form.module.css';

export const ReviewForm = ({ review, restaurantId }) => {
  const ratingRef = useRef();
  const textRef = useRef();

  const { headerText, buttonText, submitFormAction } = useReviewForm({
    review,
    restaurantId,
  });

  const [formState, submitAction, isPending] = useActionState(
    submitFormAction,
    {
      text: '',
      rating: 5,
    }
  );

  const handleSetText = useCallback(
    (e) => {
      textRef.current.value = e.target.value;
    },
    [textRef]
  );

  return (
    <form action={submitAction}>
      <h3>{headerText}</h3>

      <label className={styles.label}>
        <input
          type="text"
          id="text"
          name="text"
          ref={textRef}
          defaultValue={formState.text}
          onChange={handleSetText}
        />
        <span>Текст</span>
      </label>

      <div className={styles.counter}>
        <Button
          onClick={() => ratingRef.current.stepDown()}
          type="button"
          text="-"
        />
        <input
          className={styles.rating}
          type="number"
          id="rating"
          name="rating"
          min={1}
          max={5}
          ref={ratingRef}
          defaultValue={formState.rating}
        />
        <Button
          onClick={() => ratingRef.current.stepUp()}
          type="button"
          text="+"
        />
      </div>

      <div className={styles.buttons}>
        <Button
          type="submit"
          formAction={() => submitAction(null)}
          text="Очистить"
        />
        <Button type="submit" text={buttonText} disabled={isPending} />
      </div>
    </form>
  );
};
