import { useState } from 'react';
import { ThemeContext as ThemeContextProvider } from '.';

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextProvider>
  );
};
