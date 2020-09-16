import { theme } from '@chakra-ui/core';
import { boxShadow } from 'styled-system';

import { icons } from './icons';

const boostieTheme = {
  ...theme,
  fonts: {
    body: 'canada-type-gibson, system-ui, sans-serif',
    heading: 'canada-type-gibson, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    ...theme.fontSizes,
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '22px',
    xl: '24px',
    '2xl': '28px',
    '3xl': '32px',
    '4xl': '38px',
  },
  fontWeights: {
    ...theme.fontWeights,
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    small: '15px',
    medium: '25px',
    xlarge: '50px',
    rounded: '50%',
  },
  colors: {
    ...theme.colors,
    transparent: 'transparent',
    white: '#fff',
    gray: {
      ...theme.colors.gray,
      50: '#F0F1F5',
      500: '#9899AE',
      900: '#212237',
    },
    purple: {
      ...theme.colors.purple,
      900: '#0525F7',
    },
    green: {
      ...theme.colors.green,
      900: '#00AAA7',
    },
    red: {
      ...theme.colors.red,
      900: '#FB5253',
    },
    blue: {
      ...theme.colors.blue,
      50: '#87D1F3',
    },
    yellow: {
      ...theme.colors.yellow,
      900: '#FEBD2E',
    },
  },
  icons: {
    ...theme.icons,
    ...icons,
  },
  boxShadow: {
    ...theme.shadows,
    small: '0px 7px 5px rgba(0, 0, 0, 0.01)',
    medium: '0px 7px 7px rgba(0, 0, 0, 0.03)',
  },
};

export default boostieTheme;
