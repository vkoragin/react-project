import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/entities/cart/slice';
import { CartItem } from '../cart-item/cart-item';
import styles from './cart.module.css';

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <ul className={styles.cart}>
      {items.map(({ id, amount }) => (
        <li key={id}>
          <CartItem id={id} amount={amount} />
        </li>
      ))}
    </ul>
  );
};
