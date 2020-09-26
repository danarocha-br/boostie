import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from '~/contexts/auth';
import { DisplayInvestmentProvider } from '~/contexts/displayInvestments';
import theme from '../styles/theme';
import Routes from '../routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CSSReset />
        <AuthProvider>
          <DisplayInvestmentProvider>
            <Router>
              <Routes />
            </Router>
          </DisplayInvestmentProvider>
        </AuthProvider>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

export default App;
