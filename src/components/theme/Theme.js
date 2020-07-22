import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../AppStyles';
import { PropTypes } from 'prop-types';

// Define theme here
const theme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

export const Theme = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

Theme.propTypes = {
  children: PropTypes.object,
};
