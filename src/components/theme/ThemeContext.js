import React, { useState, useCallback } from 'react';
import { Theme } from './Theme';

const initialThemeContext = 'light';

const ThemeContextState = React.createContext(initialThemeContext);
const ThemeContextDispatch = React.createContext(undefined);

export const ThemeContextProvider = ({ children }) => {
  const getTheme = () => {
    return window.localStorage.getItem('theme') ?? initialThemeContext;
  };
  // sets the initial value from local storage if available.
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = useCallback((theme) => {
    setTheme({ theme });
    window.localStorage.setItem('theme', theme);
  }, []);

  return (
    <ThemeContextState.Provider value={theme}>
      <ThemeContextDispatch.Provider value={toggleTheme}>
        <Theme>{children}</Theme>
      </ThemeContextDispatch.Provider>
    </ThemeContextState.Provider>
  );
};

export const useThemeContextState = () => React.useContext(ThemeContextState);
export const useThemeContextDispatch = () =>
  React.useContext(ThemeContextDispatch);
