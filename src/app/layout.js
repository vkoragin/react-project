import '../app.css';

export const metadata = {
  title: 'Next js app',
  description: 'restaurants app',
};

import Layout from '../components/layout/layout';
import { StoreProvider } from '../components/store-provider/store-provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <StoreProvider>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
