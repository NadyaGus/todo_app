import { createTheme } from '@mantine/core';

const theme = createTheme({
  breakpoints: {
    lg: '74em',
    md: '64em',
    sm: '44em',
    xl: '90em',
    xs: '30em',
  },
  colors: {
    dark: [
      '#000000',
      '#111111',
      '#222222',
      '#333333',
      '#444444',
      '#555555',
      '#666666',
      '#777777',
      '#888888',
      '#999999',
      '#aaaaaa',
      '#bbbbbb',
      '#cccccc',
      '#dddddd',
      '#eeeeee',
      '#ffffff',
    ],
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
  defaultRadius: 'md',
  fontFamily: 'Open Sans, Arial, Roboto, sans-serif',
  primaryColor: 'teal',
  primaryShade: 7,
});

export { theme };
