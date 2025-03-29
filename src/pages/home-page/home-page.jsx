import { Link } from 'react-router';
import styles from './home-page.module.css';

export const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <h2>Welcome</h2>
      <Link to="/restaurants">to restaurants</Link>
    </section>
  );
};
