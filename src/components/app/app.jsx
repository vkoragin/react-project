import { StoreProvider } from '../store-provider/store-provider';
import { ThemeContext } from '../theme-context/theme-context';
import { UserContext } from '../user-context/user-context';
import Layout from '../layout/layout';
import './app.css';

export const App = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeContext>
        <UserContext>
          <Layout>{children}</Layout>
        </UserContext>
      </ThemeContext>
    </StoreProvider>
  );
};
