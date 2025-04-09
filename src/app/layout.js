export const metadata = {
  title: 'Next js app',
  description: 'restaurants app',
};

import Layout from '../components/layout/layout';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="../app.css" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
