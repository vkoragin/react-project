import { ProgressBar } from '../progress-bar/progress-bar';
import { Header } from '../header/header';
import styles from './layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <section className={styles.headerWrapper}>
        <Header />
      </section>
      <section>{children}</section>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};
