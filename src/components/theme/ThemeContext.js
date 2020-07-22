import React, { useState, useCallback } from 'react';
import { Theme } from './Theme';
import { PropTypes } from 'prop-types';

const initialThemeContext = 'light';

const ThemeContextState = React.createContext(initialThemeContext);
const ThemeContextDispatch = React.createContext(undefined);

const getTheme = () => {
  return window.localStorage.getItem('theme') ?? initialThemeContext;
};

export const ThemeContextProvider = ({ children }) => {
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

ThemeContextProvider.propTypes = {
  children: PropTypes.object,
};

export const useThemeContextState = () => React.useContext(ThemeContextState);
export const useThemeContextDispatch = () =>
  React.useContext(ThemeContextDispatch);
