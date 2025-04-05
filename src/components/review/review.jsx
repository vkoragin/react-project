import { useGetUsersQuery } from '../../redux/servicies/api';

export const Review = ({ review }) => {
  const { userId, text } = review;
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === userId),
    }),
  });

  if (!user?.name) {
    return null;
  }

  return <>{`${user.name}: ${text}`}</>;
};
