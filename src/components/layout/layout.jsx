import { ProgressBar } from '../progress-bar/progress-bar';
import styles from './layout.module.css';
import { ToggleTheme } from '../toggle-theme/toggle-theme';

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header className={styles.header}>
        <h2>Header</h2>
        <ToggleTheme />
      </header>
      <section>{children}</section>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};
