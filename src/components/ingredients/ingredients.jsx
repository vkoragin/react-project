export const Ingredients = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
};
