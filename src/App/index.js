import * as React from "react";
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import "./fonts.css";
import "./App.css";
import HomePage from "../views/HomePage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFBB00",
    },
  },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
