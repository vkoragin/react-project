import { useMemo, useState } from 'react';
import { useGetUsersQuery } from '../../redux/servicies/api';

export const useReview = ({ review, maintainerId }) => {
  const { userId, text } = review;
  const [isEdit, setIsEdit] = useState(false);

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id }) => id === userId),
    }),
  });

  const name = useMemo(() => user?.name, [user]);

  const handleSetEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const canChange = useMemo(
    () => user?.id === maintainerId,
    [user, maintainerId]
  );

  return {
    isEdit,
    text,
    name,
    canChange,
    handleSetEdit,
  };
};
