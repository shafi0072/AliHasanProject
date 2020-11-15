import { createMuiTheme } from '@material-ui/core/styles';
import overrideTheme from './overrides';

const fontSizes = {
  Small: '16px',
  Normal: '20px',
  Large: '24px',
  XLarge: '28px',
  XXLarge: '32px',
  XXXLarge: '46px',
  XXXXLarge: '60px',
  XXXXXLarge: '68px',
};

// 100: thin
// 200: ultra light
// 300: light
// 400: regular
// 500: medium
// 600: semibold
// 700: bold
// 800: extra bold
// 900: black
// 950: heavy
const fontWeights = {
  Normal: {
    fontWeight: 400,
  },
  Medium: {
    fontWeight: 500,
  },
  Light: {
    fontWeight: 300,
  },
  Semibold: {
    fontWeight: 600,
  },
  Bold: {
    fontWeight: 700,
  },
};
const gridSettings = {
  horizontalSpacing: 30,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Arial', 'Sans-Serif'].join(','),
    fontSizes: { ...fontSizes },
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      light: '#6bf501',
      dark: '#56bd08',
      main: '#6cc439',
    },
    grey: {
      '50': '#FAFAFB',
      '100': '#F5F5F4',
      '200': '#EEEEEF',
      '300': '#E0E0E1',
      '400': '#BDBDBC',
      '500': '#9E9E9F',
      '600': '#757576',
      '700': '#616162',
      '800': '#424243',
      '900': '#212122',
    },
  },
});

export default overrideTheme(theme);
export { fontSizes, fontWeights, gridSettings };
