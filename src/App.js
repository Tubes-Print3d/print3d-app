import * as React from "react";
import { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";

import HomePage from "./views/HomePage";
import ProfilePage from "./features/profile/ProfilePage";
import RegisterPage from "./features/profile/RegisterPage";
import ProductPage from "./features/products/ProductPage";
import NotFoundPage from "./views/NotFoundPage";
import PencetakPage from "./features/profile/pencetak";
import Keranjang from "./features/products/Keranjang";
import OrderPage from "./features/orders/KelolaPesanan";
import EditBahan from "./features/products/EditBahan";
import EditMesin from "./features/products/EditMesin";

import HistoryPage from "./features/orders/History";
import DetailProductPage from "./features/products/DetailProductPage";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/products/productsSlice";
import CheckoutPage from "./features/orders/CheckoutPage";
import DesainerPage from "./features/profile/desainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route component={EditBahan} exact path="/" />
          <Route component={HistoryPage} path="/history" />
          <Route component={ProfilePage} path="/profil" />
          <Route component={PencetakPage} path="/pencetak" />
          <Route component={OrderPage} exact path = "/pemesanan" />
          <Route component={ProductPage} exact path="/produk" />
          <Route component={DetailProductPage} exact path="/produk/:id" />
          <Route component={CheckoutPage} exact path="/checkout" />
          <Route component={NotFoundPage} path="*" />
          <Route component={RegisterPage} exact path="profil/register" />

        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
