import React from 'react';
import { Home } from './home/Home';
import { ThemeContextProvider } from './theme';

const App = () => {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
};
export default App;
