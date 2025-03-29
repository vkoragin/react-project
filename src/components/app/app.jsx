import { Layout } from '../layout/layout';
import { RestaurantsPage } from '../../pages/restaurants-page/restaurants-page';
import { ThemeContext } from '../theme-context/theme-context';
import { UserContext } from '../user-context/user-context';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { HomePage } from '../../pages/home-page/home-page';
import { MenuPage } from '../../pages/menu-page/menu-page';
import { ReviewsPage } from '../../pages/reviews-page/reviews-page';
import { RestaurantPage } from '../../pages/restaurant-page/restaurant-page';
import { DishPage } from '../../pages/dish-page/dish-page';

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
                <Route path="restaurants" element={<RestaurantsPage />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path="/dish/:dishId" element={<DishPage />} />
                <Route
                  path="*"
                  element={
                    <h2 style={{ textAlign: 'center' }}>404 Page not found</h2>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContext>
      </UserContext>
    </Provider>
  );
};
