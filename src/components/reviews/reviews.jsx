import { use } from 'react';
import { UserContext } from '../user-context';
import { Review } from '../review/review';
import { ReviewForm } from '../review-form/review-form';

export const Reviews = ({ reviews }) => {
  const { user } = use(UserContext);

  return (
    <>
      <ul>
        {reviews.map((id) => (
          <li key={id}>
            <Review id={id} />
          </li>
        ))}
      </ul>
      {!!user && <ReviewForm />}
    </>
  );
};
