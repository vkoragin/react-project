import { Counter } from '../counter/counter';

export const Dish = ({ name }) => {
  return (
    <>
      {name} <Counter />
    </>
  );
};
