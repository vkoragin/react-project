import { Suspense } from 'react';
import { RestaurantsPage } from '../../components/pages/restaurants-page/restaurants-page';

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

export default RestaurantsLayout;
