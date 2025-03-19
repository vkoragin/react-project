export const getCurrentProgress = () => {
  const {
    documentElement: { scrollHeight, clientHeight },
  } = document;
  const height = scrollHeight - clientHeight;
  const scrolledHeight = window.scrollY;
  const currentProgress = Math.round((scrolledHeight * 100) / height);
  return currentProgress;
};
