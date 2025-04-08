import { Link } from 'react-router';
import styles from './page-not-found.module.css';

export const PageNotFound = () => {
  return (
    <section className={styles.pageNotFound}>
      <h2>
        404
        <br />
        Страница не найдена
      </h2>
      <Link to="/">На главную</Link>
    </section>
  );
};
