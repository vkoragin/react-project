import { Review } from '../review/review';

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((id) => (
          <li key={id}>
            <Review id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
