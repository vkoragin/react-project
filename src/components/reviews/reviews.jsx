'use client';

import { use } from 'react';
import { UserContext } from '../user-context';
import { Review } from '../review/review';
import { ReviewForm } from '../review-form/review-form';

export const Reviews = ({ reviews, restaurantId, users }) => {
  const { user } = use(UserContext);

  return (
    <>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review
              review={review}
              maintainerId={user?.id}
              restaurantId={restaurantId}
              users={users}
            />
          </li>
        ))}
      </ul>
      {!!user && <ReviewForm restaurantId={restaurantId} />}
    </>
  );
};
