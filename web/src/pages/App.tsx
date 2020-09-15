import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Router } from 'react-router-dom';

import theme from '../styles/theme';
import Routes from '../routes';
import history from '../services/history';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CSSReset />
        <Router history={history}>
          <Routes />
        </Router>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

export default App;
