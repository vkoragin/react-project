export const metadata = {
  title: 'Next js app',
  description: 'restaurants app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
