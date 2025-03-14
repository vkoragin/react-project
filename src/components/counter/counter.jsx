export const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement} type="button">
        -
      </button>
      {count}
      <button onClick={increment} type="button">
        +
      </button>
    </div>
  );
};
