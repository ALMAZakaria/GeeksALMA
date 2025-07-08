import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{
      padding: '10px 20px',
      margin: '20px',
      cursor: 'pointer',
      background: theme === 'light' ? '#222' : '#eee',
      color: theme === 'light' ? '#fff' : '#222',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem'
    }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeSwitcher; 