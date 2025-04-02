import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/slice';
import { selectUserById } from '../../redux/entities/users/slice';

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  console.log(review);
  const user = useSelector((state) => selectUserById(state, review.userId));
  console.log(user);

  return <>{`${user?.name ?? ''}: ${review?.text ?? ''}`}</>;
};
