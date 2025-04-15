import { useMemo, useState } from 'react';

export const useReview = ({ review, maintainerId, users }) => {
  const { userId, text } = review;
  const [isEdit, setIsEdit] = useState(false);

  const user = useMemo(
    () => users?.find(({ id }) => id === userId),
    [users, userId]
  );

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
