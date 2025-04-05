import { use } from 'react';
import { Button } from '../button/button';
import { UserContext } from '../user-context';
import styles from './user-auth.module.css';

export const UserAuth = () => {
  const { user, login, logout } = use(UserContext);

  return (
    <div className={styles.userAuth}>
      {!!user && <p>{user.name}</p>}

      <Button
        onClick={user ? logout : login}
        type="button"
        text={user ? 'выйти' : 'войти'}
      />
    </div>
  );
};
