export const Ingredients = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={Math.random().toString(16).slice(2)}>{ingredient}</li>
      ))}
    </ul>
  );
};
