import { ProgressBar } from '../progress-bar/progress-bar';
import { Header } from '../header/header';
import { Cart } from '../cart/cart';
import styles from './layout.module.css';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <ProgressBar />
      <section className={styles.headerWrapper}>
        <Header />
      </section>
      <section className={styles.main}>
        <Outlet />
      </section>
      <section className={styles.cart}>
        <Cart />
      </section>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};
