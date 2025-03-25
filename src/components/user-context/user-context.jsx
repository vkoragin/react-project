import { useCallback, useState } from 'react';
import { UserContext as UserContextProvider } from '.';

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = useCallback(() => {
    setUser('Виктор Корягин');
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <UserContextProvider value={{ user, login, logout }}>
      {children}
    </UserContextProvider>
  );
};
