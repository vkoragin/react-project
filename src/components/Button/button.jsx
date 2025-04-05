import { use } from 'react';
import { ThemeContext } from '../theme-context';
import classNames from 'classnames';
import styles from './button.module.css';

export const Button = ({ disabled, onClick, text, type }) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.button, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
      })}
    >
      {text}
    </button>
  );
};
