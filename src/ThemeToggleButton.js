// ThemeToggleButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext';
import './index.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className="theme-toggle-icon" />
      ) : (
        <FontAwesomeIcon icon={faSun} className="theme-toggle-icon" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
