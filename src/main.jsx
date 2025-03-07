import { createRoot } from 'react-dom/client';
import { restaurants } from './contsts/mocks';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <section style={{ display: 'flex', gap: '8px' }}>
    {restaurants.map((restaurant) => (
      <section
        key={restaurant.id}
        style={{ border: 'dashed 1px black', padding: '8px' }}
      >
        <h1>{restaurant.name}</h1>
        <h3>Меню</h3>
        <ul>
          {restaurant.menu.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {restaurant.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </section>
    ))}
  </section>
);
