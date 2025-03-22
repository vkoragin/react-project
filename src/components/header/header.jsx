import styles from './header.module.css';
import { ToggleTheme } from '../toggle-theme/toggle-theme';
import { UserAuth } from '../user-auth/user-auth';

export const Header = () => {
  return (
    <header className={styles.header}>
      <ToggleTheme />
      <UserAuth />
    </header>
  );
};
