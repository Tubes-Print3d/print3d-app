import * as React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./fonts.css";
import "./App.css";
import HomePage from "../views/HomePage";
import ProfilePage from "../views/ProfilPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFBB00",
    },
    hitam: {
      main: "#0E0A0A",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
