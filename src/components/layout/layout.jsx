export const Layout = ({ children }) => {
  const style = { padding: '16px', border: 'solid 1px black' };

  return (
    <>
      <header style={{ ...style, marginBottom: '24px' }}>Header</header>
      <section>{children}</section>
      <footer style={{ ...style, marginTop: '24px' }}>Footer</footer>
    </>
  );
};
