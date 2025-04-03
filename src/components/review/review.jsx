import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/slice';
import { selectUserById } from '../../redux/entities/users/slice';

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const user = useSelector((state) => selectUserById(state, review.userId));

  const showReview = useMemo(() => !!review && !!user, [review, user]);

  return showReview ? <>{`${user.name}: ${review.text}`}</> : null;
};
