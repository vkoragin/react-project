import { useState } from 'react';
import { UserContext as UserContextProvider } from '.';

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser('Виктор Корягин');
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContextProvider value={{ user, login, logout }}>
      {children}
    </UserContextProvider>
  );
};
