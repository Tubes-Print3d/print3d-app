import * as React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import ProfilePage from "./features/profile/ProfilePage";
import ProductPage from "./features/products/ProductPage";
import NotFoundPage from "./views/NotFoundPage";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/profil">
            <ProfilePage />
          </Route>
          <Route path="/produk">
            <ProductPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
