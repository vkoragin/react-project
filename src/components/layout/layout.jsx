'use client';

import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { UserContext } from '../user-context/user-context';
import { ThemeContext } from '../theme-context/theme-context';
import { ProgressBar } from '../progress-bar/progress-bar';
import { Header } from '../header/header';
import { Cart } from '../cart/cart';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <UserContext>
        <ThemeContext>
          <ProgressBar />
          <section className={styles.headerWrapper}>
            <Header />
          </section>
          <section className={styles.main}>{children}</section>
          <section className={styles.cart}>
            <Cart />
          </section>
          <footer className={styles.footer}>Footer</footer>
        </ThemeContext>
      </UserContext>
    </Provider>
  );
};

export default Layout;
