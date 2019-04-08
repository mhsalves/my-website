import React from 'react';
import { ThemeProvider } from 'styled-components';
import baseTheme from '../themes/base';

const withTheme = Component => props => (
  <ThemeProvider theme={baseTheme}>
    <Component {...props} />
  </ThemeProvider>
);

export default withTheme;
