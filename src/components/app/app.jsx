import Layout from '../layout/layout';
import { HomePage } from '../pages/home-page/home-page';

import './app.css';

export const App = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>

    // <Provider store={store}>
    //   <UserContext>
    //     <ThemeContext>
    //       <BrowserRouter>
    //         <Routes>
    //           <Route element={<Layout />}>
    //             <Route index element={<HomePage />} />
    //             <Route path="restaurants" element={<RestaurantsPage />}>
    //               <Route path=":restaurantId" element={<RestaurantPage />}>
    //                 <Route index element={<Navigate to="menu" replace />} />
    //                 <Route path="menu" element={<MenuPage />} />
    //                 <Route path="reviews" element={<ReviewsPage />} />
    //               </Route>
    //             </Route>
    //             <Route path="/dish/:dishId" element={<DishPage />} />
    //             <Route path="*" element={<PageNotFound />} />
    //           </Route>
    //         </Routes>
    //       </BrowserRouter>
    //     </ThemeContext>
    //   </UserContext>
    // </Provider>
  );
};

export default App;
