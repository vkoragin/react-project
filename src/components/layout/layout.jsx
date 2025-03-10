export const Layout = ({ children }) => {
  const style = { padding: '16px', border: 'dashed 1px black' };

  return (
    <>
      <header style={{ ...style, marginBottom: '24px' }}>Header</header>
      <main>{children}</main>
      <footer style={{ ...style, marginTop: '24px' }}>Footer</footer>
    </>
  );
};
