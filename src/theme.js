import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { idID } from "@material-ui/core/locale";

export const hitam = {};
hitam[300] = "#383838";
hitam[400] = "#121212";
hitam[500] = "#0E0A0A";

export const kuning = {};
kuning[200] = "#ffed4d";
kuning[500] = "#FFBB00";
kuning[800] = "#c78b00";

export const biru = {};
biru[500] = "#0044ff";

let theme = createMuiTheme(
  {
    palette: {
      type: "dark",
      primary: { main: kuning[500] },
      secondary: { main: biru[500] },
      error: { main: "#ff3c00" },
      success: { main: "#44ff00" },
      info: { main: "##00ffbb" },
      background: { default: hitam[500] },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "Segoe UI",
        "Frutiger",
        "Frutiger Linotype",
        "Dejavu Sans",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ].join(","),
      fontSize: 14,
    },
  },
  idID
);

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

theme.overrides = {};

// use responsive font size
theme = responsiveFontSizes(theme);

export default theme;
