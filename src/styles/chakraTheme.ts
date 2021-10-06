import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  colors: {
    gray: {
      '50': '#EFF7FE',
      '100': '#d1d2dc',
      '300': '#A1A4B0'
    },
    blue: {
      '50': '#B9E4FF',
      '300': '#0175FF'
    },
    green: {
      '50': '#94D4C4',
      '300': '#3DCFAD'
    }
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.500'
      }
    }
  }
});
