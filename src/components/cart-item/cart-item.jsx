export const CartItem = ({ id, amount, restaurants }) => {
  const restaurant = restaurants.find((dish) => dish.id === id);

  return restaurant ? `${restaurant.name} - ${amount}` : null;
};
