
import { typographyVariants }from './typographyVariants'

const main = '#0000FF';
const contrast = '#FFFFFF';

export const colors = {
    background: {
      light: {
        color: contrast,
      },
      main: {
        color: main,
      },
    },
    primary: {
      main: {
        color: contrast,
        contrastText: main,
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