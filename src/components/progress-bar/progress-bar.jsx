import { useState, useEffect } from 'react';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const {
      documentElement: { scrollHeight, clientHeight },
    } = document;
    const height = scrollHeight - clientHeight;
    const scrolledHeight = window.scrollY;
    const currentProgress = Math.round((scrolledHeight * 100) / height);

    setProgress(currentProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: `${progress}%`,
        backgroundColor: 'red',
        position: 'fixed',
        top: '0',
        left: '0',
        height: '4px',
        overflow: 'hidden',
      }}
    />
  );
};
