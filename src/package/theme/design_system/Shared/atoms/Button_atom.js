/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import { fontSizes, fontWeights } from '../../../theme';

const ButtonAtom = (theme) => ({
  button: {
    '&.MuiButton-root': {
      textTransform: 'capitalize',
      boxShadow: 'none',
      borderRadius: 0,
      ...fontWeights.Normal,
      fontSize: fontSizes.Small,
      boxSizing: 'border-box',
      height: 48,
      paddingLeft: 24,
      paddingRight: 24,
      letterSpacing: 1,
      minWidth: 48,
      paddingTop: 0,
      paddingBottom: 0,
    },
    '&.MuiButton-root .MuiButton-label': {
      lineHeight: '40px',
    },
    '&.MuiButton-outlined .MuiButton-label': {
      lineHeight: '40x',
    },
    '&.MuiButton-containedPrimary': {
      backgroundColor: theme.palette.primary.main,
      background: `linear-gradient(70deg, ${theme.palette.primary.light} -3%, ${theme.palette.primary.dark} 100%)`,
    },
    '&.MuiButton-containedPrimary:hover': {
      backgroundColor: theme.palette.primary.dark,
      background: theme.palette.primary.dark,
    },
    '&.MuiButton-outlined': {
      backgroundColor: theme.palette.common.white,
    },
    '&.MuiButton-outlinedPrimary': {
      borderImage: `linear-gradient(70deg, ${theme.palette.primary.light} -3%, #CA0029 100%) 1`,
    },
    '&.MuiButton-text': {
      padding: 0,
      height: 'auto',
    },
    '&.MuiButton-text .MuiButton-label': {
      lineHeight: '16px',
    },
  },
});

export default ButtonAtom;
