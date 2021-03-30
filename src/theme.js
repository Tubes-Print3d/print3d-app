import { createMuiTheme } from "@material-ui/core";
import { idID } from '@material-ui/core/locale';

export const hitam = {};
hitam[500] = "#0E0A0A";

export const kuning = {};
kuning[500] = "#FFBB00";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: kuning[500],
    },
    hitam: {
      main: hitam[500],
    },
    background: {
      default: hitam[500],
    },
  },
}, idID);

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

theme.overrides = {
  MuiTypography: {
    h1: {
      fontFamily: 'Arial Black, Arial Bold, Gadget, sans-serif',
      fontSize: 24,
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 700,
      lineHeight: '26.4px',
    },
    h3: {
      fontFamily: 'Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif',
      fontSize: 14,
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 700,
      lineHeight: '15.4px',
    },
    p: {
      fontFamily: 'Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif',
      fontSize: 14,
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 400,
      lineHeight: '20px',
    },
    // blockquote: {
    //   fontFamily: 'Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif',
    //   fontSize: 21,
    //   fontStyle: 'normal',
    //   fontVariant: 'normal',
    //   fontWeight: 400,
    //   lineHeight: '30px',
    // },
    // pre: {
    //   fontFamily: 'Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif',
    //   fontSize: 13,
    //   fontStyle: 'normal',
    //   fontVariant: 'normal',
    //   fontWeight: 400,
    //   lineHeight: '18.5667px',
    // }
  }
}

export default theme;
