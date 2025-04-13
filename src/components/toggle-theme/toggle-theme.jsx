'use client';

import { use } from 'react';
import { Button } from '../button/button';
import { ThemeContext } from '../theme-context';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      type="button"
      text={theme === 'light' ? 'switch to dark' : 'switch to light'}
    />
  );
};
