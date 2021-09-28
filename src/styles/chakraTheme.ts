import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  colors: {
    gray: {
      '100': '#d1d2dc'
    }
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
});
