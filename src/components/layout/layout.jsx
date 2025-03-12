import { STYLE } from './consts';

export const Layout = ({ children }) => {
  return (
    <>
      <header style={{ ...STYLE, marginBottom: '24px' }}>Header</header>
      <section>{children}</section>
      <footer style={{ ...STYLE, marginTop: '24px' }}>Footer</footer>
    </>
  );
};
