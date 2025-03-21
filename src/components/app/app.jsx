import { Layout } from '../layout/layout';
import { RestaurantPage } from '../restaurant-page/restaurant-page';
import { ThemeContext } from '../theme-context/theme-context';
import './app.css';

export const App = () => {
  return (
    <ThemeContext>
      <Layout>
        <RestaurantPage />
      </Layout>
    </ThemeContext>
  );
};
