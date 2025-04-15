import { UserContext } from '../user-context/user-context';
import { ThemeContext } from '../theme-context/theme-context';
import { ProgressBar } from '../progress-bar/progress-bar';
import { CartContainer } from '../cart/cart-container';
import { Header } from '../header/header';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <UserContext>
      <ThemeContext>
        <ProgressBar />
        <section className={styles.headerWrapper}>
          <Header />
        </section>
        <section className={styles.main}>{children}</section>
        <section className={styles.cart}>
          <CartContainer />
        </section>
        <footer className={styles.footer}>Footer</footer>
      </ThemeContext>
    </UserContext>
  );
};

export default Layout;
