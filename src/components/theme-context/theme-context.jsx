'use client';

import { useCallback, useState } from 'react';
import { ThemeContext as ThemeContextProvider } from '.';

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextProvider>
  );
};
