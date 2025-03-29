import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../../pages/restaurants-page/restaurants-page';
import { ThemeContext } from '../theme-context/theme-context';
import { UserContext } from '../user-context/user-context';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from '../../pages/home-page/home-page';
import { RestaurantPage } from '../../pages/restaurant-page/restaurant-page';

import './app.css';

export const App = () => {
  return (
    <Provider store={store}>
      <UserContext>
        <ThemeContext>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsPage />}>
                  <Route path=":restaurantId" element={<RestaurantPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContext>
      </UserContext>
    </Provider>
  );
};
