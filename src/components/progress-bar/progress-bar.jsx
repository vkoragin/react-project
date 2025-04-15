'use client';

import { useState, useEffect } from 'react';
import { getCurrentProgress } from './helper';
import styles from './progress-bar.module.css';

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
      className={styles.progressBar}
      style={{
        width: `${progress}%`,
      }}
    />
  );
};
