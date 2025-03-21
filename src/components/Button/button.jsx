import styles from './button.module.css';

export const Button = ({ isActive, onClick, text, type }) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
      disabled={isActive}
    >
      {text}
    </button>
  );
};
