export const Button = ({ isActive, onClick, text, type }) => {
  return (
    <button type={type} onClick={onClick} disabled={isActive}>
      {text}
    </button>
  );
};
