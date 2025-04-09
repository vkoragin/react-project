import Link from 'next/link';
import styles from './home-page.module.css';

export const HomePage = () => {
  return (
    <section className={styles.homePage}>
      <h2>Welcome</h2>
      <Link href="/restaurants">to restaurants</Link>
    </section>
  );
};
