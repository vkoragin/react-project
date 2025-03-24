import { Layout } from '../layout/layout';
import { RestaurantPage } from '../restaurant-page/restaurant-page';
import { ThemeContext } from '../theme-context/theme-context';
import { UserContext } from '../user-context/user-context';
import './app.css';

export const App = () => {
  return (
    <UserContext>
      <ThemeContext>
        <Layout>
          <RestaurantPage />
        </Layout>
      </ThemeContext>
    </UserContext>
  );
};
