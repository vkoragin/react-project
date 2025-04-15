export const CartItem = ({ id, amount, menu }) => {
  const dish = menu.find((dish) => dish.id === id);

  return dish ? `${dish.name} - ${amount}` : null;
};
