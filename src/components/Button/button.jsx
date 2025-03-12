export const Button = ({ isActive, onClick, text }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: '8px',
        color: 'black',
        fontWeight: isActive ? 'bold' : 'normal',
        borderRight: 'solid 1px black',
        borderTop: 'solid 1px black',
        borderBottom: 'none',
        borderLeft: 'none',
        background: 'none',
      }}
    >
      {text}
    </button>
  );
};
