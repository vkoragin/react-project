import { Suspense } from 'react';
import { RestaurantsPage } from '../../components/pages/restaurants-page/restaurants-page';

export default RestaurantsPage;

export const RestaurantsLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback="...loading">
        <RestaurantsPage />
      </Suspense>
      {children}
    </div>
  );
};
