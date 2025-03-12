export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </>
  );
};
