
import { typographyVariants }from './typographyVariants'
export const colors = {
    background: {
      light: {
        color: '#FFFFFF',
      },
      main: {
        color: '#0000FF',
      },
    },
    borders: {
      main: {
        color: '#F1F1F1',
      },
    },
    primary: {
      main: {
        color: '#FFFFFF',
        contrastText: '#0000FF',
      },
    },
    secondary: {
      main: {
        color: '#FB7B6B',
        contrastText: '#fff',
      },
    },
    tertiary: {
      main: {
        color: '#070C0E',
        contrastText: '#fff',
      },
      light: {
        color: '#88989E',
        contrastText: '#fff',
      },
    },
    modes: {
      dark: {},
    },
  };


  export default {
    colors,
    breakpoints:{
        xs: 0,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1200
      },
    typographyVariants, 
  }; 