export const metadata = {
  title: 'Next js app',
  description: 'restaurants app',
};

import { App } from '../components/app/app';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
