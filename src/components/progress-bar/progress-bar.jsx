import { useState, useEffect } from 'react';
import { getCurrentProgress } from './helper';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentProgress = getCurrentProgress();
      setProgress(currentProgress);
    };

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
      }}
    />
  );
};
